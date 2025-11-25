/**
 * Product Loader
 * Utility functions to load and display products from API
 */

/**
 * Render a single product item
 * @param {Object} product - Product data object (can be API format or display format)
 * @param {string} containerSelector - CSS selector for the container
 */
function renderProduct(product, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error(`Container not found: ${containerSelector}`);
    return;
  }

  // Map API product to display format if needed
  const mappedProduct = product.imageURL || product.sellingPrice !== undefined 
    ? mapApiProductToDisplay(product) 
    : product;

  // Create product HTML structure
  const productHTML = `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <!-- Start Product Item -->
      <div class="product-item" data-product-id="${mappedProduct.id || ''}">
        <div class="product-thumb">
          <img src="${mappedProduct.image || 'assets/img/shop/1.png'}" alt="${mappedProduct.name || 'Product'}" onerror="this.src='assets/img/shop/1.png'">
          <div class="product-action">
            <a class="action-quick-view" href="shop-cart.html"><i class="ion-ios-cart"></i></a>
            <a class="action-quick-view" href="javascript:void(0)"><i class="ion-arrow-expand"></i></a>
            <a class="action-quick-view" href="shop-wishlist.html"><i class="ion-heart"></i></a>
            <a class="action-quick-view" href="shop-compare.html"><i class="ion-shuffle"></i></a>
          </div>
        </div>
        <div class="product-info">
          <div class="rating">
            ${generateStarRating(mappedProduct.rating || 5)}
          </div>
          <h4 class="title"><a href="shop-single-product.html?id=${mappedProduct.id || ''}">${mappedProduct.name || 'Product Name'}</a></h4>
          <div class="prices">
            <span class="price">Rs. ${(mappedProduct.price || 0).toFixed(2)}</span>
            ${mappedProduct.originalPrice && mappedProduct.originalPrice > mappedProduct.price 
              ? `<span class="price-old">Rs. ${mappedProduct.originalPrice.toFixed(2)}</span>` 
              : ''}
          </div>
        </div>
      </div>
      <!-- End Product Item -->
    </div>
  `;

  // Append to container
  if (container.classList.contains('row')) {
    container.insertAdjacentHTML('beforeend', productHTML);
  } else {
    // If container is not a row, find or create a row inside
    let row = container.querySelector('.row');
    if (!row) {
      row = document.createElement('div');
      row.className = 'row';
      container.appendChild(row);
    }
    row.insertAdjacentHTML('beforeend', productHTML);
  }
}

/**
 * Generate star rating HTML
 * @param {number} rating - Rating value (0-5)
 * @returns {string} HTML string for stars
 */
function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHTML = '';

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHTML += '<span class="fa fa-star"></span>';
    } else if (i === fullStars && hasHalfStar) {
      starsHTML += '<span class="fa fa-star-half-o"></span>';
    } else {
      starsHTML += '<span class="fa fa-star-o"></span>';
    }
  }

  return starsHTML;
}

/**
 * Load and display products
 * @param {string} containerSelector - CSS selector for the container
 * @param {Object} params - Optional query parameters (skipCount, maxResultCount, etc.)
 */
async function loadProducts(containerSelector, params = {}) {
  try {
    const products = await getAllProducts(params);
    
    // Clear existing products if needed
    const container = document.querySelector(containerSelector);
    if (container && params.clear !== false) {
      const productItems = container.querySelectorAll('.product-item');
      productItems.forEach(item => item.remove());
    }

    // Render each product (products is already an array from getAllProducts)
    if (Array.isArray(products) && products.length > 0) {
      products.forEach(product => {
        renderProduct(product, containerSelector);
      });
    } else {
      console.warn('No products to display');
    }

    return products;
  } catch (error) {
    console.error('Error loading products:', error);
    // Show error message to user
    const container = document.querySelector(containerSelector);
    if (container) {
      container.innerHTML = '<div class="col-12"><p class="text-center text-danger">Error loading products. Please try again later.</p></div>';
    }
    throw error;
  }
}

/**
 * Load product details and populate the page
 * @param {number|string} productId - Product ID from URL or parameter
 */
async function loadProductDetails(productId) {
  try {
    // Get product ID from URL if not provided
    if (!productId) {
      const urlParams = new URLSearchParams(window.location.search);
      productId = urlParams.get('id');
    }

    if (!productId) {
      console.error('Product ID not found');
      return;
    }

    const product = await getProductDetails(productId);
    
    // Update product title
    const titleElement = document.querySelector('.single-product-info .title, .product-details .title');
    if (titleElement && product.name) {
      titleElement.textContent = product.name;
    }

    // Update product price
    const priceElement = document.querySelector('.single-product-info .price, .product-details .price');
    if (priceElement && product.price) {
      priceElement.textContent = `$${product.price}`;
    }

    // Update product image
    const imageElement = document.querySelector('.single-product-thumb img, .product-thumb img');
    if (imageElement && product.image) {
      imageElement.src = product.image;
      imageElement.alt = product.name || 'Product';
    }

    // Update product description
    const descElement = document.querySelector('.product-desc, .product-description');
    if (descElement && product.description) {
      descElement.textContent = product.description;
    }

    return product;
  } catch (error) {
    console.error('Error loading product details:', error);
    throw error;
  }
}

/**
 * Map API product response to display format
 * @param {Object} apiProduct - Product from API
 * @returns {Object} Mapped product object
 */
function mapApiProductToDisplay(apiProduct) {
  return {
    id: apiProduct.id || apiProduct.code,
    name: apiProduct.name || apiProduct.nameInSinhala || 'Product',
    price: apiProduct.sellingPrice || apiProduct.unitPrice || 0,
    originalPrice: apiProduct.unitPrice,
    image: apiProduct.imageURL || 'assets/img/shop/1.png',
    description: apiProduct.description || '',
    rating: 5, // Default rating, can be updated if API provides it
    code: apiProduct.code || '',
    brandName: apiProduct.brandName || '',
    barCode: apiProduct.barCode || ''
  };
}

/**
 * Get random products from array
 * @param {Array} products - Array of products
 * @param {number} count - Number of random products to return
 * @returns {Array} Random products array
 */
function getRandomProducts(products, count = 10) {
  if (!Array.isArray(products) || products.length === 0) {
    return [];
  }
  
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, products.length));
}

/**
 * Render product for slider (Trending Product section)
 * @param {Object} product - Product data object
 * @returns {string} HTML string for slider item
 */
function renderProductForSlider(product) {
  const mappedProduct = mapApiProductToDisplay(product);
  
  return `
    <div class="slide-item">
      <!-- Start Product Item -->
      <div class="product-item" data-product-id="${mappedProduct.id}">
        <div class="product-thumb">
          <img src="${mappedProduct.image}" alt="${mappedProduct.name}" onerror="this.src='assets/img/shop/1.png'">
          <div class="product-action">
            <a class="action-quick-view" href="shop-cart.html"><i class="ion-ios-cart"></i></a>
            <a class="action-quick-view" href="javascript:void(0)"><i class="ion-arrow-expand"></i></a>
            <a class="action-quick-view" href="shop-wishlist.html"><i class="ion-heart"></i></a>
            <a class="action-quick-view" href="shop-compare.html"><i class="ion-shuffle"></i></a>
          </div>
        </div>
        <div class="product-info">
          <div class="rating">
            ${generateStarRating(mappedProduct.rating || 5)}
          </div>
          <h4 class="title"><a href="shop-single-product.html?id=${mappedProduct.id}">${mappedProduct.name}</a></h4>
          <div class="prices">
            <span class="price">Rs. ${mappedProduct.price.toFixed(2)}</span>
            ${mappedProduct.originalPrice && mappedProduct.originalPrice > mappedProduct.price 
              ? `<span class="price-old">Rs. ${mappedProduct.originalPrice.toFixed(2)}</span>` 
              : ''}
          </div>
        </div>
      </div>
      <!-- End Product Item -->
    </div>
  `;
}

/**
 * Load trending products into the slider
 * @param {number} count - Number of products to load (default: 10)
 */
async function loadTrendingProducts(count = 10) {
  try {
    // Get products from API
    const allProducts = await getAllProducts({
      skipCount: 0,
      maxResultCount: 100 // Get more to have enough for random selection
    });
    
    if (!Array.isArray(allProducts) || allProducts.length === 0) {
      console.warn('No products found from API');
      return;
    }
    
    // Get random products
    const randomProducts = getRandomProducts(allProducts, count);
    
    // Find the trending product slider
    const slider = document.querySelector('.product-tab1-slider');
    if (!slider) {
      console.error('Trending Product slider not found');
      return;
    }
    
    // Clear existing slide items
    slider.innerHTML = '';
    
    // Render each product
    randomProducts.forEach(product => {
      const productHTML = renderProductForSlider(product);
      slider.insertAdjacentHTML('beforeend', productHTML);
    });
    
    // Reinitialize the slider if Slick is being used
    // Use setTimeout to ensure DOM is updated before initializing
    setTimeout(() => {
      if (typeof jQuery !== 'undefined' && jQuery.fn.slick) {
        // Destroy existing Slick instance if any
        if (jQuery(slider).hasClass('slick-initialized')) {
          jQuery(slider).slick('unslick');
        }
        
        // Initialize new Slick slider
        jQuery(slider).slick({
          dots: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      }
    }, 100);
    
    console.log(`Loaded ${randomProducts.length} trending products`);
    return randomProducts;
  } catch (error) {
    console.error('Error loading trending products:', error);
    // Show error message
    const slider = document.querySelector('.product-tab1-slider');
    if (slider) {
      slider.innerHTML = '<div class="col-12"><p class="text-center text-danger">Error loading trending products. Please try again later.</p></div>';
    }
    throw error;
  }
}

// Auto-load product details if on product detail page
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a product detail page
  if (window.location.pathname.includes('shop-single-product')) {
    loadProductDetails();
  }
  
  // Load trending products on home pages
  if (window.location.pathname.includes('index') || window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('index-2.html')) {
    loadTrendingProducts(10);
  }
});


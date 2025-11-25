# API Usage Guide

## Configuration

The API base URL is stored in `api-config.js`:
```javascript
const API_CONFIG = {
  BASE_URL: 'http://localhost:44352/api'
};
```

## Available Functions

### 1. Get Product Details
```javascript
// Get a single product by ID
const product = await getProductDetails(1);
console.log(product);
```

### 2. Get All Products
```javascript
// Get all products
const products = await getAllProducts();

// Get products with pagination
const products = await getAllProducts({ page: 1, limit: 10 });

// Get products with filters
const products = await getAllProducts({ category: 'toys', minPrice: 10, maxPrice: 100 });
```

### 3. Search Products
```javascript
// Search products
const results = await searchProducts('teddy bear');

// Search with additional parameters
const results = await searchProducts('teddy bear', { limit: 20 });
```

### 4. Load Products (Auto-render)
```javascript
// Load and display products in a container
await loadProducts('.product-container');

// Load products with parameters
await loadProducts('.product-container', { page: 1, limit: 12 });

// Load products without clearing existing ones
await loadProducts('.product-container', { clear: false });
```

### 5. Load Product Details (Auto-populate)
```javascript
// Automatically loads product details if on product detail page
// Or manually call:
await loadProductDetails(1);

// Or get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
await loadProductDetails(productId);
```

## Example: Load Products on Page Load

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Load products when page loads
  loadProducts('.product-row', { page: 1, limit: 8 })
    .then(products => {
      console.log('Products loaded:', products);
    })
    .catch(error => {
      console.error('Failed to load products:', error);
    });
});
```

## Example: Search Functionality

```javascript
document.querySelector('#search-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const searchTerm = document.querySelector('#search-input').value;
  
  try {
    const results = await searchProducts(searchTerm);
    // Clear existing products
    document.querySelector('.product-container').innerHTML = '';
    // Render search results
    results.forEach(product => {
      renderProduct(product, '.product-container');
    });
  } catch (error) {
    console.error('Search failed:', error);
  }
});
```

## API Response Format

The API should return data in one of these formats:

### Single Product
```json
{
  "id": 1,
  "name": "Product Name",
  "price": 29.99,
  "image": "assets/img/shop/1.png",
  "description": "Product description",
  "rating": 4.5
}
```

### Multiple Products
```json
[
  {
    "id": 1,
    "name": "Product 1",
    "price": 29.99,
    "image": "assets/img/shop/1.png"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 39.99,
    "image": "assets/img/shop/2.png"
  }
]
```

### Paginated Response
```json
{
  "data": [...],
  "page": 1,
  "limit": 10,
  "total": 100
}
```

## Error Handling

All API functions throw errors that should be caught:

```javascript
try {
  const product = await getProductDetails(1);
} catch (error) {
  console.error('Error:', error);
  // Show error message to user
  alert('Failed to load product. Please try again.');
}
```


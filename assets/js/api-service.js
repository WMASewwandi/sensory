/**
 * API Service
 * Handles all API calls for the application
 */

/**
 * Get product details by ID
 * @param {number|string} productId - The product ID
 * @returns {Promise} Promise that resolves with product data
 */
async function getProductDetails(productId) {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/products/${productId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
}

/**
 * Get all products
 * @param {Object} body - Request body for POST request (e.g., { skipCount: 0, maxResultCount: 10 })
 * @returns {Promise} Promise that resolves with products array from result.items
 */
async function getAllProducts(body = {}) {
  try {
    const url = `${API_CONFIG.BASE_URL}/services/app/product/GetAll`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Handle the nested response structure
    if (data.success && data.result && data.result.items) {
      return data.result.items;
    } else if (data.result && Array.isArray(data.result)) {
      return data.result;
    } else if (Array.isArray(data)) {
      return data;
    } else {
      console.warn('Unexpected API response structure:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Search products
 * @param {string} searchTerm - The search term
 * @param {Object} params - Optional query parameters
 * @returns {Promise} Promise that resolves with search results
 */
async function searchProducts(searchTerm, params = {}) {
  try {
    const queryParams = { ...params, q: searchTerm };
    const queryString = new URLSearchParams(queryParams).toString();
    const url = `${API_CONFIG.BASE_URL}/products/search?${queryString}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getProductDetails,
    getAllProducts,
    searchProducts
  };
}


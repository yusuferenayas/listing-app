const routes = {
  index: '/',
  productDetail: (id: number) => '/product-detail/' + id,
}

const apiRoutes = {
  fetchProducts: 'https://dummyjson.com/products',
  fetchProductDetail: (productId: number) =>
    'https://dummyjson.com/products/' + productId,
}

export { routes, apiRoutes }

class Product {
  constructor(item) {
      this.id = item.node.id;
      this.price = this.productGrossPrice(item.node);
      this.mainImageUrl = this.productMainImage(item.node);
      this.name = item.node.name;
  }

  productMainImage = (note) => {
    return note.images ? note.images[0].url : '';
  }

  productGrossPrice = (node) => {
    try {
      return node.pricing.priceRange.start.gross.amount;
    } catch (error) {
      return 0;
    }
  };
  
}

export default Product;
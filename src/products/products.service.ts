import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';

@Injectable()
export class ProductsService {
  private products: ProductsDto[] = [];

  insertProduct(product: ProductsDto) {
    this.products.push(product);
    return this.products;
  }

  returnAllProducts() {
    return this.products;
  }

  returnAProduct(productId: string) {
    const product = this.products.find((p) => p.id === productId);
    return product ?? {};
  }

  editAProduct(productId: string, editedProduct: ProductsDto) {
    const editedProductIndex = this.products.findIndex(
      (p) => p.id === productId,
    );
    if (editedProductIndex >= 0) {
      this.products[editedProductIndex] = editedProduct;
      return this.products;
    }
    throw new HttpException(
      `Product with id - ${productId} not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  editAProductPartially(
    productId: string,
    editedProduct: Partial<ProductsDto>,
  ) {
    const editedProductIndex = this.products.findIndex(
      (p) => p.id === productId,
    );
    if (editedProductIndex === -1) {
      throw new HttpException(
        `Product to be edited (#${productId}) not found!`,
        HttpStatus.NOT_FOUND,
      );
    }
    const product = this.products[editedProductIndex];
    this.products[editedProductIndex] = { ...product, ...editedProduct };
    return this.products;
  }

  removeAProduct(productId: string) {
    this.products = this.products.filter((p) => p.id !== productId);
    return this.products;
  }
}

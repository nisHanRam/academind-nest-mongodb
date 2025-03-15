import { Injectable } from '@nestjs/common';
import { ProductsDto } from './dto/products.dto';
import { InjectModel } from '@nestjs/mongoose';
import { productDocument, productModel } from './schema/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(productModel.name)
    private productModel: Model<productDocument>,
  ) {}

  async insertProduct(productsDto: ProductsDto) {
    const createdProduct = new this.productModel(productsDto);
    return createdProduct.save();
  }

  async returnAllProducts() {
    return this.productModel.find().exec();
  }

  async returnAProduct(productId: string) {
    return this.productModel.findById(productId).exec();
  }

  async editAProduct(productId: string, editedProduct: ProductsDto) {
    return this.productModel
      .findByIdAndUpdate(productId, editedProduct, {
        new: true,
      })
      .exec();
  }

  async removeAProduct(productId: string) {
    return this.productModel.findByIdAndDelete(productId).exec();
  }
}

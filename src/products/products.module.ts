import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { productModel, productSchema } from './schema/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: productModel.name, schema: productSchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}

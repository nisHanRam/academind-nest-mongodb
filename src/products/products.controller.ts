import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addProduct(@Body() productsDto: ProductsDto) {
    return this.productsService.insertProduct(productsDto);
  }

  @Get()
  getAllProducts() {
    return this.productsService.returnAllProducts();
  }

  @Get(':id')
  getAProduct(@Param('id') id: string) {
    return this.productsService.returnAProduct(id);
  }

  @Put(':id')
  updateAProduct(@Param('id') id: string, @Body() productsDto: ProductsDto) {
    return this.productsService.editAProduct(id, productsDto);
  }

  @Patch(':id')
  updateAProductPartially(
    @Param('id') id: string,
    @Body() productsDto: Partial<ProductsDto>,
  ) {
    return this.productsService.editAProductPartially(id, productsDto);
  }

  @Delete(':id')
  removeAProduct(@Param('id') id: string) {
    return this.productsService.removeAProduct(id);
  }
}

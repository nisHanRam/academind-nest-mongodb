import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class productModel {
  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: Number })
  price: number;
}

export const productSchema = SchemaFactory.createForClass(productModel);
export type productDocument = productModel & Document;

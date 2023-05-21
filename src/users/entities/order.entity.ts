import { Product } from './../../products/entities/product.entity';
import { User } from './user.entity';

export class Order {
  fecha: Date;
  user: User;
  product: Product[];
}

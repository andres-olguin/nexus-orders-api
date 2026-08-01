import { EntitySchema } from 'typeorm';
import { Order, OrderStatus } from '../../domain/entities/order.entity';

export const OrderSchema = new EntitySchema<Order>({
  name: 'Order',
  target: Order,
  columns: {
    id: {
      type: String,
      primary: true,
    },
    customerId: {
      type: String,
    },
    items: {
      type: 'json',
    },
    status: {
      type: String,
      default: OrderStatus.PENDING,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
  },
});
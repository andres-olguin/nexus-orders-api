import { Injectable, Inject } from '@nestjs/common';
import { Order, OrderItem } from '../../domain/entities/order.entity';
import type { IOrderRepository } from '../../domain/repositories/order.repository.interface';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class CreateOrderUseCase {
  constructor(
    @Inject('IOrderRepository')
    private readonly orderRepository: any,
  ) {}

  async execute(dto: CreateOrderDto): Promise<Order> {
    const items = dto.items.map(
      (item) => new OrderItem(item.productId, item.quantity, item.unitPrice),
    );

    const generatedId = `ORD-${Date.now()}`;
    const newOrder = new Order(generatedId, dto.customerId, items);

    await this.orderRepository.save(newOrder);
    return newOrder;
  }
}
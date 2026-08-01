import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../../domain/entities/order.entity';
import { IOrderRepository } from '../../domain/repositories/order.repository.interface';
import { OrderSchema } from './order.schema';

@Injectable()
export class TypeOrmOrderRepository implements IOrderRepository {
  constructor(
    @InjectRepository(OrderSchema)
    private readonly repository: Repository<Order>,
  ) {}

  async save(order: Order): Promise<void> {
    await this.repository.save(order);
  }

  async findById(id: string): Promise<Order | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findAll(): Promise<Order[]> {
    return await this.repository.find();
  }

  async update(order: Order): Promise<void> {
    await this.repository.save(order);
  }
}
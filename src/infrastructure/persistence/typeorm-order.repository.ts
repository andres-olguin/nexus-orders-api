import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderSchema } from './order.schema';

@Injectable()
export class TypeOrmOrderRepository {
  constructor(
    @InjectRepository(OrderSchema)
    private readonly repository: Repository<any>,
  ) {}

  async save(order: any): Promise<void> {
    await this.repository.save(order);
  }

  async findAll(): Promise<any[]> {
    return await this.repository.find();
  }
}
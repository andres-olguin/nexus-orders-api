import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateOrderUseCase } from '../../application/use-cases/create-order.use-case';
import { CreateOrderDto } from '../../application/dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly createOrderUseCase: CreateOrderUseCase) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    return await this.createOrderUseCase.execute(dto);
  }
}
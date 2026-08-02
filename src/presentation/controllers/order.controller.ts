import { Controller, Post, Body, Get, Patch, Param, Inject } from '@nestjs/common';
import { CreateOrderUseCase } from '../../application/use-cases/create-order.use-case';
import { CreateOrderDto } from '../../application/dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase,
    @Inject('IOrderRepository')
    private readonly orderRepository: any,
  ) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    return await this.createOrderUseCase.execute(dto);
  }

  @Get()
  async findAll() {
    return await this.orderRepository.findAll();
  }

  @Patch(':id/complete')
  async completeOrder(@Param('id') id: string) {
    const order = await this.orderRepository.repository.findOneBy({ id });
    if (order) {
      order.status = 'COMPLETED';
      await this.orderRepository.save(order);
    }
    return order;
  }
}
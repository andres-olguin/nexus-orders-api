import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderSchema } from './infrastructure/persistence/order.schema';
import { TypeOrmOrderRepository } from './infrastructure/persistence/typeorm-order.repository';
import { CreateOrderUseCase } from './application/use-cases/create-order.use-case';
import { OrderController } from './presentation/controllers/order.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'nexus.db',
      entities: [OrderSchema],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([OrderSchema]),
  ],
  controllers: [OrderController],
  providers: [
    CreateOrderUseCase,
    {
      provide: 'IOrderRepository',
      useClass: TypeOrmOrderRepository,
    },
  ],
})
export class AppModule {}
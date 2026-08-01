export class CreateOrderItemDto {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export class CreateOrderDto {
  customerId: string;
  items: CreateOrderItemDto[];
}
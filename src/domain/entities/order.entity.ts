export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export class OrderItem {
  constructor(
    public readonly productId: string,
    public readonly quantity: number,
    public readonly unitPrice: number,
  ) {}

  get subtotal(): number {
    return this.quantity * this.unitPrice;
  }
}

export class Order {
  constructor(
    public readonly id: string,
    public readonly customerId: string,
    public readonly items: OrderItem[],
    public status: OrderStatus = OrderStatus.PENDING,
    public readonly createdAt: Date = new Date(),
  ) {}

  get totalAmount(): number {
    return this.items.reduce((sum, item) => sum + item.subtotal, 0);
  }

  markAsProcessing(): void {
    if (this.status !== OrderStatus.PENDING) {
      throw new Error('Solo se pueden procesar ordenes pendientes.');
    }
    this.status = OrderStatus.PROCESSING;
  }

  markAsCompleted(): void {
    if (this.status !== OrderStatus.PROCESSING) {
      throw new Error('Solo se pueden completar ordenes en procesamiento.');
    }
    this.status = OrderStatus.COMPLETED;
  }
}
import type { PrismaClient, Product, Order, Prisma } from '@prisma/client';
import { type CreateOrderDto, OrderStatus } from '@vse-bude/shared';
import type { OrderById, OrderQuery } from '@types';

export class OrderRepository {
  private _dbClient: PrismaClient;

  constructor(dbClient: PrismaClient) {
    this._dbClient = dbClient;
  }

  public getAll({ buyerId, productId }: OrderQuery): Promise<Order[]> {
    return this._dbClient.order.findMany({
      where: {
        buyerId,
        productId,
      },
    });
  }

  public getById(id: string): Prisma.Prisma__OrderClient<
    Order & {
      product: Product;
      buyer: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
      };
    }
  > {
    return this._dbClient.order.findUnique({
      where: { id },
      include: {
        product: true,
        buyer: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
      },
    });
  }

  public async create({
    productId,
    buyerId,
    cost,
  }: CreateOrderDto): Promise<Order & OrderById> {
    return this._dbClient.order.create({
      data: {
        productId,
        buyerId,
        cost,
        status: OrderStatus.CREATED,
      },
      include: {
        product: true,
        buyer: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
          },
        },
      },
    });
  }

  public updateStatus(id: string, status: OrderStatus): Promise<Order> {
    return this._dbClient.order.update({
      where: { id },
      data: { status },
    });
  }
}

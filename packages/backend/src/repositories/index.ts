import type { PrismaClient } from '@prisma/client';
import { UserRepository } from './user';
import { CategoryRepository } from './category';
import { ProductRepository } from './product';
import { RefreshTokenRepository } from './refresh-token';
import { NewsRepository } from './news';
import { HealthRepository } from './health';
import { UserProfileRepository } from './profile';
import { BidRepository } from './bid';
import { MyListRepository } from './my-list';
import { OrderRepository } from './order';

export const initRepositories = (prismaClient: PrismaClient) => ({
  userRepository: new UserRepository(prismaClient),
  categoryRepository: new CategoryRepository(prismaClient),
  productRepository: new ProductRepository(prismaClient),
  newsRepository: new NewsRepository(prismaClient),
  refreshTokenRepository: new RefreshTokenRepository(prismaClient),
  healthRepository: new HealthRepository(prismaClient),
  profileRepository: new UserProfileRepository(prismaClient),
  bidRepository: new BidRepository(prismaClient),
  myListRepository: new MyListRepository(prismaClient),
  orderRepository: new OrderRepository(prismaClient),
});

export type Repositories = ReturnType<typeof initRepositories>;

export {
  type UserRepository,
  type RefreshTokenRepository,
  type CategoryRepository,
  type ProductRepository,
  type NewsRepository,
  type HealthRepository,
  type UserProfileRepository,
  type BidRepository,
  type MyListRepository,
  type OrderRepository,
};

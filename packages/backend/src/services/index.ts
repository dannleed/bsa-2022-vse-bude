import type { Repositories } from '@repositories';
import { RandomDataService } from './random-data';
import { UserService } from './user';
import { RedisStorageService } from './redis-storage';

export const initServices = (repositories: Repositories) => ({
  randomDataService: new RandomDataService(repositories.randomDataRepository),
  userService: new UserService(repositories.userRepository),
  redisStorageService: new RedisStorageService(),
});

export type Services = ReturnType<typeof initServices>;

export { type RandomDataService, type UserService };

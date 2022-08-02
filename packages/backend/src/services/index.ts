import type { Repositories } from '@repositories';
import { RandomDataService } from './random-data';
import { UserService } from './user';

export const initServices = (repositories: Repositories) => ({
  randomDataService: new RandomDataService(repositories.randomDataRepository),
  userService: new UserService(repositories.userRepository),
});

export type Services = ReturnType<typeof initServices>;

export { type RandomDataService, type UserService };

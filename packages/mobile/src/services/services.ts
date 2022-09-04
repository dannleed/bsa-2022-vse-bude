import { MMKV } from 'react-native-mmkv';
import { ENV } from '~/common/enums/enums';
import { Http } from './http/http.service';
import { Storage } from './storage/storage.service';
import { AuthApi } from './auth-api/auth-api.service';
import { Image } from './image/image.service';
import { NotificationService } from './notification/notification.service';
import { PersonalInfoApi } from './personal-info-api/personal-info-api.service';
import { ProductService } from './product/product.service';
import { AppService } from './app/app.service';

const storage = new Storage({
  storage: new MMKV(),
});

const http = new Http({
  storage,
});

const authApi = new AuthApi({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const image = new Image({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const productApi = new ProductService({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const notification = new NotificationService();

const personalInfoApi = new PersonalInfoApi({
  http,
  apiPrefix: ENV.APP.API_ORIGIN_URL,
});

const appService = new AppService();

export {
  storage,
  authApi,
  image,
  notification,
  personalInfoApi,
  productApi,
  appService,
};

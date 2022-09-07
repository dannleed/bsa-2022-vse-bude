import { MAX_IMAGE_SIZE } from '@vse-bude/shared';
import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '~/common/constants/constants';

export const screens = {
  words: {
    FIRST_NAME: "Ім'я",
    LAST_NAME: 'Прізвище',
    SELLER: 'Продавець',
    CONTACT: 'Контакти',
  },
  welcome: {
    TITLE: 'Марка "Русский военный корабль"',
    DESCRIPTION: 'Марка була випущена Укрпоштою у 2022. Вислів став відомим...',
    BET: 'Ставка',
    UAH: 'ГРН',
  },
  verification: {
    SING_IN: 'Увійти',
    EMAIL: 'Адреса електронної пошти',
    EMAIL_HINT: 'Введіть електронну адресу',
    PASSWORD: 'Пароль',
    PASSWORD_REPEAT: 'Повторіть пароль',
    PASSWORD_CURRENT: 'Поточний пароль',
    PASSWORD_NEW: 'Новий пароль',
    PASSWORD_HINT: 'Введіть пароль',
    NAME: "Ім'я",
    NAME_HINT: "Введіть своє Ім'я",
    LAST_NAME: 'Прізвище',
    LAST_NAME_HINT: 'Введіть своє Прізвище',
    CREATE_ACCOUNT: 'Створити акаунт',
    PHONE_NUMBER: 'Телефонний номер',
    PHONE_NUMBER_HINT: 'Введіть свій номер телефону',
    GOOGLE_BUTTON: 'Увійти за допомогою Google',
    FORGOT_PASSWORD: 'Забули Пароль',
    ENTER_EMAIL: 'Введіть електронну пошту, щоб отримати пароль',
    HIDE_EMAIL: 'Приховати електронну адресу',
    RESET_PASSWORD: 'Скинути пароль',
  },
  personal_info: {
    PERSONAL_INFO: 'Особиста інформація',
    ADDRESS: 'Адреса',
    COUNTRY: 'Країна',
    REGION: 'Регіон',
    CITY: 'Місто',
    ZIP_CODE: 'Поштовий індекс',
    ZIP_CODE_HINT: 'Введіть поштовий індекс',
    DELIVERY_DATA: 'Дані про доставку',
    DELIVERY_DATA_HINT: 'Введіть адресу доставки',
    SOCIAL_NETWORKS: 'Соціальні мережі',
    INSTAGRAM_HINT: 'Введіть свій Instagram',
    LINKEDIN_HINT: 'Введіть свій Linkedin',
    FACEBOOK_HINT: 'Введіть свій Facebook',
  },
  account: {
    ACCOUNT: 'Акаунт',
    PERSONAL_INFO: 'Персональна інформація',
    SETTINGS: 'Налаштування',
    MESSAGES: 'Повідомлення',
    SUPPORT: 'Підтримка',
    SIGN_OUT: 'Вийти',
  },
  errors: {
    EMPTY_EMAIL: 'Будь-ласка, введіть email',
    EMPTY_FIRST_NAME: 'Будь-ласка, введіть ім`я',
    EMPTY_LAST_NAME: 'Будь-ласка, введіть прізвище',
    EMPTY_PHONE: 'Будь-ласка, введіть номер телефону',
    EMPTY_PASSWORD: 'Будь-ласка, введіть пароль',
    LATIN: 'Дозволено введення лише латинських літер',
    INVALID_EMAIL: 'Неправильний формат електронної пошти',
    SPACES: 'Введення пробілів заборонено',
    MIN_PASSWORD_LENGTH: `Пароль має містити не менше ${MIN_PASSWORD_LENGTH} символів`,
    MAX_PASSWORD_LENGTH: `Пароль має містити не більше ${MAX_PASSWORD_LENGTH} символів`,
    UP_LOW_NUM:
      'Пароль має складатися щонайменше з однієї великої літери, однієї маленької літери, однієї цифри',
    INVALID_PASSWORD: 'Неправильний формат паролю',
    REPEAT_PASSWORD_INVALID: 'Паролі не співпадають',
    MIN_NAME_LENGTH: `{{name}} має містити не менше ${MIN_NAME_LENGTH} символу`,
    MAX_NAME_LENGTH: `{{name}} має містити не більше ${MAX_NAME_LENGTH} символів for Ukrainian localization`,
    FIRST_NAME_INVALID: 'Неправильний формат імені',
    LAST_NAME_INVALID: 'Неправильний формат прізвища',
    WRONG_FORMAT: 'Невірний формат',
    MAX_IMAGE_SIZE: `Максимальний розмір файлу ${MAX_IMAGE_SIZE / 1000000} МБ`,
  },
  make_a_post: {
    TITLE: 'Створити публікацію',
    DOWNLOAD_PHOTOS: 'Завантажити зображення',
    ADD_PHOTOS: 'Додати фото',
    DESCRIPTION: 'Опис',
    DESCRIPTION_PLACEHOLDER: 'Ввeдіть опис товару',
    CATEGORY: 'Категорія',
    CATEGORY_PLACEHOLDER: 'Оберіть категорію',
    TITLE_NAME: 'Назва товару',
    TITLE_NAME_PLACEHOLDER: 'Введіть назву',
    PRICE: 'Ціна',
    PRICE_PLACEHOLDER: 'Введіть ціну',
    PRICE_TOOLTIP: 'Інформація про ціну',
    CURRENCY: 'Валюта',
    CONTACT: 'Контактна інформація',
    COUNTRY: 'Країна',
    CITY: 'Місто',
    MOBILE_PHONE: 'Телефон',
    PHONE_TOOLTIP: 'Інформація про телефон',
    CALLING_CODE: 'Код',
    INSTAGRAM: 'Instagram',
    INSTAGRAM_PLACEHOLDER: 'Введіть нікнейм',
    FACEBOOK: 'Facebook',
    FACEBOOK_PLACEHOLDER: 'Введіть нікнейм',
    SITE: 'Сайт',
  },
  home: {
    HELP_UKRAINE: 'Допоможи Україні',
    SEARCH_PLACEHOLDER: 'Знайти товари',
    ARTS: 'Мистецтво',
    TOYS: 'Іграшки',
    HOME_DECORS: 'Домашній Декор',
    APPLIANCES: 'Побутова Техніка',
    POPULAR_LOTS: 'Популярні Лоти',
    SEE_ALL_LOTS: 'Переглягути Усі Лоти',
    SEE_ALL_ITEMS: 'Переглягути Усі Товари',
    CHARITY_ORGANIZATIONS: 'Благодійні Організації',
    POPULAR_ITEMS: 'Популярні Товари',
  },
  type_of_post: {
    TITLE: 'Створити публікацію',
    HEADER: 'Якого типу ви бажаєте створити публікацію?',
    AUCTION: 'Аукціон',
    DIRECT_SALE: 'Прямий продаж',
  },
  product_info: {
    ENDING_ON: 'Закінчується',
    TIME_ZONE: 'Часовий пояс',
    STATUS: 'Стан',
    LOCATION: 'Місцезнаходження',
    DESCRIPTION: 'Опис',
    CURRENT_BID: 'Поточна ставка',
    MIN_UAH: 'Мін ГРН',
  },
};

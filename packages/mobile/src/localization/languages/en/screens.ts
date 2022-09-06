import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '~/common/constants/constants';

export const screens = {
  words: {
    FIRST_NAME: 'First name',
    LAST_NAME: 'Last name',
    SELLER: 'Seller',
    CONTACT: 'Contact',
  },
  welcome: {
    TITLE: 'Mark "Russian Warship"',
    DESCRIPTION:
      'The stamp was made by Ukrposhta in 2022. The expression became famous...',
    BET: 'Bet',
    UAH: 'UAH',
  },
  verification: {
    SING_IN: 'Sing in',
    EMAIL: 'Email',
    EMAIL_HINT: 'Enter your email',
    PASSWORD: 'Password',
    PASSWORD_REPEAT: 'Repeat Password',
    PASSWORD_CURRENT: 'Current Password',
    PASSWORD_NEW: 'New Password',
    PASSWORD_HINT: 'Enter password',
    NAME: 'Name',
    NAME_HINT: 'Enter your name',
    LAST_NAME: 'Last name',
    LAST_NAME_HINT: 'Enter your last name',
    CREATE_ACCOUNT: 'Create account',
    PHONE_NUMBER: 'Phone Number',
    PHONE_NUMBER_HINT: 'Enter your phone',
    GOOGLE_BUTTON: 'Sign in with Google',
  },
  personal_info: {
    PERSONAL_INFO: 'Personal Info',
    ADDRESS: 'Address',
    COUNTRY: 'Country',
    REGION: 'Region',
    CITY: 'City',
    ZIP_CODE: 'ZIP Code',
    ZIP_CODE_HINT: 'Enter ZIP Code',
    DELIVERY_DATA: 'Delivery data',
    DELIVERY_DATA_HINT: 'Enter delivery address',
    SOCIAL_NETWORKS: 'Social networks',
    INSTAGRAM_HINT: 'Enter you Instagram',
    LINKEDIN_HINT: 'Enter you Linkedin',
    FACEBOOK_HINT: 'Enter you Facebook',
  },
  account: {
    ACCOUNT: 'Account',
    PERSONAL_INFO: 'Personal Info',
    SETTINGS: 'Settings',
    MESSAGES: 'Messages',
    SUPPORT: 'Support',
    SIGN_OUT: 'Sign Out',
  },
  errors: {
    EMPTY_EMAIL: 'Fill the email please',
    EMPTY_FIRST_NAME: 'Fill the first name please!',
    EMPTY_LAST_NAME: 'Fill the last name please!”',
    EMPTY_PHONE: 'Fill the phone number please!',
    EMPTY_PASSWORD: 'Fill the password please!',
    LATIN: 'You can use only Latin letters',
    INVALID_EMAIL: 'The invalid email format',
    SPACES: 'Spaces are not allowed',
    MIN_PASSWORD_LENGTH: `Password length must be at least ${MIN_PASSWORD_LENGTH} characters`,
    MAX_PASSWORD_LENGTH: `Password length must not exceed ${MAX_PASSWORD_LENGTH} characters`,
    UP_LOW_NUM:
      'Password should include at least one uppercase, one lowercase and one number',
    INVALID_PASSWORD: 'The invalid password format',
    REPEAT_PASSWORD_INVALID: 'Passwords are not the same',
    MIN_NAME_LENGTH: `{{name}} must be at least ${MIN_NAME_LENGTH} character`,
    MAX_NAME_LENGTH: `{{name}} must be not more than ${MAX_NAME_LENGTH} characters`,
    FIRST_NAME_INVALID: 'The invalid first name format',
    LAST_NAME_INVALID: 'The invalid last name format',
    WRONG_FORMAT: 'Wrong format',
  },
  make_a_post: {
    TITLE: 'Make a Post',
    DOWNLOAD_PHOTOS: 'Download Photos',
    ADD_PHOTOS: 'Add Photos',
    DESCRIPTION: 'Description',
    DESCRIPTION_PLACEHOLDER: 'Enter your product desciption',
    CATEGORY: 'Category',
    CATEGORY_PLACEHOLDER: 'Select the category',
    TITLE_NAME: 'Title Name',
    TITLE_NAME_PLACEHOLDER: 'Enter name',
    PRICE: 'Price',
    PRICE_PLACEHOLDER: 'Enter your price',
    PRICE_TOOLTIP: 'Info about price',
    CURRENCY: 'Currency',
    CONTACT: 'Contact',
    COUNTRY: 'Country',
    CITY: 'City',
    MOBILE_PHONE: 'Mobile Phone',
    PHONE_TOOLTIP: 'Info about phone',
    CALLING_CODE: 'Calling Code',
    INSTAGRAM: 'Instagram',
    INSTAGRAM_PLACEHOLDER: 'Enter your nickname',
    FACEBOOK: 'Facebook',
    FACEBOOK_PLACEHOLDER: 'Enter your nickname',
    SITE: 'Site',
  },
  type_of_post: {
    TITLE: 'Make a Post',
    HEADER: 'What type a post do you create?',
    AUCTION: 'Auction',
    DIRECT_SALE: 'Direct Sale',
  },
};

import { MAX_IMAGE_SIZE } from '@vse-bude/shared';
import {
  MAX_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_NAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_COUNTRY_LENGTH,
  MAX_REGION_LENGTH,
  MAX_CITY_LENGTH,
  MAX_DELIVERY_DATA_LENGTH,
  MAX_SOCIAL_NETWORK_LENGTH,
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
    FORGOT_PASSWORD: 'Forgot Password',
    ENTER_EMAIL: 'Enter your email to retrieve your password',
    HIDE_EMAIL: 'Hide Email',
    RESET_PASSWORD: 'Reset Password',
    RESET_PASSWORD_SUCCESS: 'Password reset request successfully submitted',
    VERIFY_EMAIL: 'Verify email',
  },
  personal_info: {
    PERSONAL_INFO: 'Personal Info',
    ADDRESS: 'Address',
    COUNTRY: 'Country',
    COUNTRY_HINT: 'Enter country',
    REGION: 'Region',
    REGION_HINT: 'Enter region',
    CITY: 'City',
    CITY_HINT: 'Enter city',
    ZIP_CODE: 'ZIP Code',
    ZIP_CODE_HINT: 'Enter ZIP Code',
    DELIVERY_DATA: 'Delivery data',
    DELIVERY_DATA_HINT: 'Enter delivery address',
    SOCIAL_NETWORKS: 'Social networks',
    INSTAGRAM_HINT: 'Enter you Instagram',
    LINKEDIN_HINT: 'Enter you Linkedin',
    FACEBOOK_HINT: 'Enter you Facebook',
    CHANGES_SAVED: 'Changes saved',
    CHANGES_CANCELED: 'Changes canceled',
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
    UNKNOWN_ERROR: 'Something went wrong',
    EMPTY_EMAIL: 'Fill the email please',
    WRONG_EMAIL: 'Email is wrong',
    EMPTY_FIRST_NAME: 'Fill the first name please!',
    EMPTY_LAST_NAME: 'Fill the last name please!”',
    EMPTY_PHONE: 'Fill the phone number please!',
    EMPTY_CODE: 'Fill the code please!',
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
    WRONG_FORMAT_PHONE:
      'Please enter phone number in an international format, e.g.: +380123456789',
    PLACE_NAME: 'Should consist of letters: А-Я or A-Z',
    MAX_COUNTRY_LENGTH: `The country name length must not exceed ${MAX_COUNTRY_LENGTH} characters`,
    MAX_REGION_LENGTH: `The region name length must not exceed ${MAX_REGION_LENGTH} characters`,
    MAX_CITY_LENGTH: `The city name length must not exceed ${MAX_CITY_LENGTH} characters`,
    INVALID_ZIP: 'Zip code should consist of 5 digits',
    MAX_DELIVERY_DATA_LENGTH: `Delivery details length must not exceed ${MAX_DELIVERY_DATA_LENGTH} characters`,
    INVALID_URI:
      'Example of link to your profile in the network: https://some-net/me-id-1234',
    MAX_SOCIAL_NETWORK_LENGTH: `The link length must not exceed ${MAX_SOCIAL_NETWORK_LENGTH} characters`,
    MAX_IMAGE_SIZE: `Maximum file size is ${MAX_IMAGE_SIZE / 1000000} Mb`,
    CORRECTLY_FILLED: 'Please check fields to correctly filled',
  },
  verify: {
    VERIFY: 'Verify',
    VERIFY_PHONE: 'Verify phone',
    ENTER_NUMBER: 'Enter Your Phone Number',
    PLEASE_ENTER:
      'For further verification of account, please enter your phone here or verify it on your Personal Info page.',
    INPUT_LABEL_PHONE: 'Phone',
    VERIFY_LATER: 'Verify later',
    BACK_HOME: 'Home',
    BACK_BUTTON: 'Back',
    ENTER_CODE: 'Enter a code',
    JUST_SENT: 'We just sent a code to',
    INPUT_LABEL_CODE: 'Enter the verification code we just sent to you',
    RESEND_CODE: 'Resend code',
    CONTINUE: 'Continue',
    VERIFIED_TITLE_PHONE: 'Your phone has been fully verified',
    VERIFIED_TITLE_EMAIL: 'Your email has been fully verified',
    CODE_SENT: 'Code sent',
  },
  make_a_post: {
    TITLE: 'Make a Post',
    AUCTION_TITLE: 'Make an Auction Post',
    DOWNLOAD_PHOTOS: 'Download Photos',
    ADD_PHOTOS: 'Add Photos',
    DESCRIPTION: 'Description',
    DESCRIPTION_PLACEHOLDER: 'Enter your product description',
    ENDING_DATE: 'Ending Date',
    ENDING_TIME: 'Ending Time',
    CATEGORY: 'Category',
    CATEGORY_PLACEHOLDER: 'Select the category',
    TITLE_NAME: 'Title Name',
    TITLE_NAME_PLACEHOLDER: 'Enter name',
    PRICE: 'Price',
    PRICE_PLACEHOLDER: 'Enter your price',
    PRICE_TOOLTIP: 'Info about price',
    STARTING_BID_PRICE: 'Starting Bid Price',
    STARTING_PRICE_PLACEHOLDER: 'Enter price',
    MIN_RANGE: 'Minimum Range',
    MIN_RANGE_PLACEHOLDER: 'Enter min',
    MAX_RANGE: 'Maximum Range',
    MAX_RANGE_PLACEHOLDER: 'Enter max',
    CURRENCY: 'Currency',
    CONTACT: 'Contact',
    COUNTRY: 'Country',
    COUNTRY_PLACEHOLDER: 'Choose Country',
    CITY: 'City',
    CITY_PLACEHOLDER: 'Choose City',
    MOBILE_PHONE: 'Mobile Phone',
    PHONE_TOOLTIP: 'Info about phone',
    CALLING_CODE: 'Calling Code',
    INSTAGRAM: 'Instagram',
    INSTAGRAM_PLACEHOLDER: 'Enter your nickname',
    FACEBOOK: 'Facebook',
    FACEBOOK_PLACEHOLDER: 'Enter your nickname',
    SITE: 'Site',
  },
  home: {
    HELP_UKRAINE: 'Help Ukraine',
    SEARCH_PLACEHOLDER: 'Search the products',
    ARTS: 'Arts',
    TOYS: 'Toys',
    HOME_DECORS: 'Home Decors',
    APPLIANCES: 'Appliances',
    POPULAR_LOTS: 'Popular Lots',
    SEE_ALL_LOTS: 'See All Lots',
    SEE_ALL_ITEMS: 'See All Items',
    CHARITY_ORGANIZATIONS: 'Charity Organizations',
    POPULAR_ITEMS: 'Popular Items',
  },
  type_of_post: {
    TITLE: 'Make a Post',
    HEADER: 'What type a post do you create?',
    AUCTION: 'Auction',
    DIRECT_SALE: 'Direct Sale',
  },
  product_info: {
    TITLE: 'Product details',
    ENDING_ON: 'Ending on',
    TIME_ZONE: 'Time zone',
    STATUS: 'Status',
    LOCATION: 'Location',
    DESCRIPTION: 'Description',
    CURRENT_BID: 'Current bid',
    MIN_UAH: 'Min UAH',
  },
  filter: {
    TITLE: 'Filter',
    ALL: 'All',
    FIXED_PRICE: 'Fixed price',
    AUCTION: 'Auction',
    CATEGORY: 'Category',
    PRICE: 'Price',
    SORT_BY: 'Sort by',
    BY_DATE: 'By data',
    BY_PRICE: 'By price',
    BY_VIEWS: 'By views',
  },
};

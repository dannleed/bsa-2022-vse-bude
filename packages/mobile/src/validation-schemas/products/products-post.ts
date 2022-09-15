import * as Joi from 'joi';
import i18next from 'i18next';
import { Condition, IPostForms, PLACE } from '@vse-bude/shared';
import { PHONE_NUMBER_REGEX } from '~/common/regexp/regexp';
import {
  MAX_COUNTRY_LENGTH,
  MAX_CITY_LENGTH,
  MAX_TITLE_POST_LENGTH,
  MAX_DESCRIPTION_POST_LENGTH,
  MIN_PRICE,
} from '~/common/constants/constants';

const productsPostSchema = Joi.object<IPostForms>({
  category: Joi.string().empty(''),
  title: Joi.string()
    .trim()
    .required()
    .max(MAX_TITLE_POST_LENGTH)
    .messages({
      'string.max': i18next.t('errors.MAX_TITLE_POST_LENGTH'),
      'string.empty': i18next.t('errors.EMPTY_PRODUCT'),
    }),
  description: Joi.string()
    .trim()
    .required()
    .max(MAX_DESCRIPTION_POST_LENGTH)
    .messages({
      'string.max': i18next.t('errors.MAX_DESCRIPTION_POST_LENGTH'),
      'string.empty': i18next.t('errors.EMPTY_DESCRIPTION'),
    }),
  condition: Joi.string().valid(Condition.NEW, Condition.USED),
  currency: Joi.any().empty(''),
  price: Joi.number()
    .min(MIN_PRICE)
    .messages({
      'number.base': i18next.t('errors.NUMBER_PRICE'),
      'number.min': i18next.t('errors.MIN_PRICE'),
    }),
  phone: Joi.string()
    .trim()
    .required()
    .pattern(PHONE_NUMBER_REGEX)
    .messages({
      'string.empty': i18next.t('errors.EMPTY_PHONE'),
      'string.pattern.base': i18next.t('errors.WRONG_FORMAT_PHONE'),
    }),
  country: Joi.string()
    .required()
    .max(MAX_COUNTRY_LENGTH)
    .pattern(PLACE)
    .messages({
      'string.empty': i18next.t('errors.EMPTY_COUNTRY'),
      'string.max': i18next.t('errors.MAX_COUNTRY_LENGTH'),
      'string.pattern.base': i18next.t('errors.PLACE_NAME'),
    }),
  city: Joi.string()
    .required()
    .max(MAX_CITY_LENGTH)
    .pattern(PLACE)
    .messages({
      'string.empty': i18next.t('errors.EMPTY_CITY'),
      'string.max': i18next.t('errors.MAX_CITY_LENGTH'),
      'string.pattern.base': i18next.t('errors.PLACE_NAME'),
    }),
});

export { productsPostSchema };

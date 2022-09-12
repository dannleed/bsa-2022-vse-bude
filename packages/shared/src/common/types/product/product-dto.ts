import type { ProductType, ProductStatus } from '../../enums';
import type { WinnerDto } from './winner-dto';

interface SocialMedia {
  id: string;
  socialMedia: string;
  link: string;
}

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
  socialMedia: SocialMedia[];
}

interface Category {
  id: string;
  title: string;
}

export interface Bid {
  id: string;
  bidderId: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export enum Condition {
  NEW = 'NEW',
  USED = 'USED',
}

interface ProductDto {
  id: string;
  title: string;
  description: string;
  price: number;
  recommendedPrice: number;
  minimalBid: number;
  imageLinks: string[];
  country: string;
  city: string;
  phone: string;
  socialMedia: SocialMedia[];
  type: ProductType;
  status: ProductStatus;
  cancelReason: string;
  bids?: Bid[];
  condition: Condition;
  category: Category;
  views: number;
  author: Author;
  winner: WinnerDto;
  updatedAt: string;
  postDate: string;
  createdAt: string;
  endDate: string;
  currentPrice: number;
}

export type { ProductDto };

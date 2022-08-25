import type { ProductRepository } from '@repositories';
import type { ProductQuery } from '@types';

export class ProductService {
  private _productRepository: ProductRepository;

  constructor(categoryRepository: ProductRepository) {
    this._productRepository = categoryRepository;
  }

  public getAll(query: ProductQuery) {
    return this._productRepository.getAll(query);
  }

  public getById(id: string) {
    return this._productRepository.getById(id);
  }

  public incrementViews(id: string) {
    return this._productRepository.incrementViews(id);
  }
}

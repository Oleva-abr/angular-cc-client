import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { PaginationParams, Products } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }
  getProducts = (url: string, params: PaginationParams): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: "json",
    })
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = 'https://hksocket.herokuapp.com/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/frontend`);
  }

  getPaginatedProducts(filter): Observable<Product[]> {
    let params = new HttpParams();

    if (filter.s) {
      params = params.set('s', filter.s);
    }

    if (filter.sort) {
      params = params.set('sort', filter.sort);
    }

    if (filter.page) {
      params = params.set('page', filter.page.toString());
    }

    return this.http.get<Product[]>(`${this.API_URL}/backend`, { params });
  }
}

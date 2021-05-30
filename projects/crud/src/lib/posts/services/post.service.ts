import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.API_URL}`);
  }

  add(post): Observable<PostInterface> {
    return this.http.post<PostInterface>(`${this.API_URL}`, post);
  }

  update(post): Observable<PostInterface> {
    return this.http.put<PostInterface>(`${this.API_URL}/${post.id}`, post);
  }

  delete(postId): Observable<any> {
    return this.http.delete(`${this.API_URL}/${postId}`);
  }
}

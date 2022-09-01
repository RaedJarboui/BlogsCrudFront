import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private httpClient: HttpClient) { }

  getBlogsList(): Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/blogs`);
  }

  createBlog(blog): Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/add/blog`, blog);
  }

 getBlogById(id:number): Observable<Object>
{
  return this.httpClient.get<any>(`http://localhost:8080/blog/${id}`)
}}

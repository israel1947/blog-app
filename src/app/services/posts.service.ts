import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroments';
import { CarrucelData, Comment, Post, Posts } from '../interfaces/interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostsService{

  private URL = environment.URL;

  constructor(private http: HttpClient) { };

  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.URL}/posts`);
  };

  getPostById(id:number){
    return this.http.get<Post>(`${this.URL}/posts/${id}`);
  };

  getComments(post_id:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.URL}/comments?post_id=${post_id}`);
  };

  getPostByCategory(category:string):Observable<Post[]>{
    return this.http.get<Post[]>(`${this.URL}/posts?category=${category}`);
  };
}

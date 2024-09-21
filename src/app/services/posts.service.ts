import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroments';
import { Post, Posts } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService{

  private URL = environment.URL;

  constructor(private http: HttpClient) { };

  getAllPosts() {
    return this.http.get<Post>(`${this.URL}/posts`);
  };

  getPostById(id:number){
    return this.http.get<Post>(`${this.URL}/posts/${id}`);
  };
}

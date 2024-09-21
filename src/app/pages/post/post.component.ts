import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, CustomDatePipe, MatChipsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  postData:Post | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private postServices: PostsService){
    const postDetailId = parseInt(this.route.snapshot.params['id'], 10);
    this.postServices.getPostById(postDetailId).subscribe((post)=>{
      this.postData = post;
      console.log("Post data: ",this.postData);
    });
  }

  savePost(){
    console.log("save");
  };

  moreActions(){
    console.log("more");
  };

  like(){
    console.log("Like");
  };

}

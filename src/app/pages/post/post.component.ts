import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Comment, Post } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { ComentsComponent } from '../../components/coments/coments.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, CustomDatePipe, MatChipsModule, ComentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  postData: Post | undefined;
  comentData: Comment[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  showFiller = false;

  constructor(private postServices: PostsService, private comentsService: PostsService) {
    const postDetailId = parseInt(this.route.snapshot.params['id'], 10);
    this.postServices.getPostById(postDetailId).subscribe((post) => {
      this.postData = post;
    });
  }


  savePost() {
    console.log("save");
  };

  moreActions() {
    console.log("more");
  };

  like() {
    console.log("Like");
  };

  coments() {
    const comentDetailId = parseInt(this.route.snapshot.params['id'], 10);
    this.comentsService.getComments(comentDetailId).subscribe((coments: Comment[]) => {
      this.comentData = coments.filter(comment => comment.post_id === comentDetailId);
    });
    this.showFiller = !this.showFiller;
  };

  close(newValue:boolean){
    this.showFiller = newValue;
  }

}

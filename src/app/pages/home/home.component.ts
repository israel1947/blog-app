import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CarrucelData } from '../../interfaces/interface';
import { PostsService } from '../../services/posts.service';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CarrucelComponent } from "../../components/carrucel/carrucel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, CardComponent, CarrucelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  listItems = [
    'All',
    'Negocios',
    'Tecnología',
    'Arte',
    'Cultura',
    'Salud',
    'Cocina',
    'Finanzas',
    'Desarrollo Personal',
    'Educación',
  ];
  posts: any[] = [];
  slideData: any[] = []

  constructor(private postsServices: PostsService) { };


  ngOnInit(): void {
    this.allPosts();
  }

  allPosts() {
    this.postsServices.getAllPosts().subscribe((resp) => {
      this.postsFun(resp);
    });
  }

  tabNav(tabValue: number) {
    const selectedTab = this.listItems[tabValue];
    this.getPostByCategory(selectedTab);
  }

  getPostByCategory(category: string) {
    if (category == 'All') {
      this.postsServices.getPostByCategory(category = '').subscribe((resp) => {
        this.postsFun(resp);
      });
    }
    this.postsServices.getPostByCategory(category).subscribe((resp) => {
      this.postsFun(resp);
    });
  }

  postsFun(resp:any){
    this.posts = resp;
    this.slideData = resp.slice(-5);
  }
}

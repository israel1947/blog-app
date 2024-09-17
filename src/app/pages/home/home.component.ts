import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CarrucelData} from '../../interfaces/interface';
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
    'all',
    'Negocios',
    'Tecnologia',
    'Arte',
    'Cultura',
    'Salud',
    'Cocina',
    'Finanzas',
    'Desarrollo Personal',
    'Educación',
  ];

  posts:any = [];

  slideData: CarrucelData[] = [
    {
      "id": 5,
      "title": "Building Accessible Websites: A Complete Guide",
      "image": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Learn how to create accessible websites that are usable by everyone, regardless of their abilities.",
      "created_at": "2024-08-12T09:30:00Z",
      "last_read_at": "2024-09-08T16:40:00Z",
      "category": "Tecnología",
      "author": {
        "name": "Carlos Martinez",
        "photo": "https://randomuser.me/api/portraits/men/78.jpg"
      }
    },
    {
      "id": 6,
      "title": "CSS Grid vs. Flexbox: Which Should You Use?",
      "image": "https://images.unsplash.com/photo-1711659829586-fa5d64ac9b7a?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Compare CSS Grid and Flexbox to understand which layout system to use for different scenarios.",
      "created_at": "2024-08-02T08:00:00Z",
      "last_read_at": "2024-09-07T18:20:00Z",
      "category": "Tecnología",
      "author": {
        "name": "Jane Olson",
        "photo": "https://randomuser.me/api/portraits/women/89.jpg"
      }
    },
    {
      "id": 7,
      "title": "State Management in Modern Web Applications",
      "image": "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A detailed overview of state management solutions in modern web development, including Redux, Vuex, and NgRx.",
      "created_at": "2024-08-28T13:45:00Z",
      "last_read_at": "2024-09-10T12:30:00Z",
      "category": "Tecnología",
      "author": {
        "name": "Sophie Turner",
        "photo": "https://randomuser.me/api/portraits/women/47.jpg"
      }
    },
    {
      "id": 8,
      "title": "A Guide to Progressive Web Apps (PWAs)",
      "image": "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Understand what Progressive Web Apps are, their benefits, and how to build one from scratch.",
      "created_at": "2024-08-14T10:00:00Z",
      "last_read_at": "2024-09-09T15:00:00Z",
      "category": "Tecnología",
      "author": {
        "name": "David Kim",
        "photo": "https://randomuser.me/api/portraits/men/38.jpg"
      }
    },
    {
      "id": 9,
      "title": "Demystifying Cloud Native Development",
      "image": "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "A beginner's guide to cloud-native development, focusing on containerization, microservices, and DevOps.",
      "created_at": "2024-08-22T09:15:00Z",
      "last_read_at": "2024-09-07T11:55:00Z",
      "category": "Tecnología",
      "author": {
        "name": "Isabella Santos",
        "photo": "https://randomuser.me/api/portraits/women/82.jpg"
      }
    },
    {
      "id": 10,
      "title": "Introduction to GraphQL for Beginners",
      "image": "https://cdn.hashnode.com/res/hashnode/image/upload/v1617264296534/9o-zqrCgn.png?auto=compress,format&format=webp",
      "description": "Learn the basics of GraphQL and how to use it as a more efficient alternative to REST APIs.",
      "created_at": "2024-08-07T11:00:00Z",
      "last_read_at": "2024-09-08T13:30:00Z",
      "category": "Tecnología",
      "author": {
        "name": "Laura Fisher",
        "photo": "https://randomuser.me/api/portraits/women/61.jpg"
      }
    },
  ];

  constructor(private postsServices: PostsService) { };


  ngOnInit(): void {
    this.allPosts();
  }

  allPosts() {
    this.postsServices.getAllPosts().subscribe((resp) => {
      this.posts = resp;
    });
  }
}

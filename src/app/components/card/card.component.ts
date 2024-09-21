import { Component, Input } from '@angular/core';
import { Post, Posts } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule, CustomDatePipe, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() post!:any;
}

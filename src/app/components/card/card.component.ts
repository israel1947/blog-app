import { Component, Input } from '@angular/core';
import { Post, Posts } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ CommonModule, CustomDatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() post!:any;
}

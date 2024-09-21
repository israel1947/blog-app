import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { CarrucelData } from '../../interfaces/interface';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-carrucel',
  standalone: true,
  imports: [CommonModule, CustomDatePipe, RouterModule],
  templateUrl: './carrucel.component.html',
  styleUrl: './carrucel.component.scss'
})
export class CarrucelComponent {

  @Input() slideData2!: CarrucelData[];

  currentIndex: number = 0;


  nextBtn(slide: any, i: number) {
    if (i <= 0) {
      const restarCarrucel = i.toString;
      this.nextBtn(slide, restarCarrucel.length + 1);
    }
    this.currentIndex = i + 1;
  };

  prevBnt(slide: any, i: number) {
    if (i <= 0) {
      const restarCarrucel = i.toString;
      this.nextBtn(slide, restarCarrucel.length + 1);
    }
    this.currentIndex = i - 1;
  };
}

export { CarrucelData };

import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  @ViewChild('menuItems') menuItems!: ElementRef;
  private click = false;
  constructor(private render: Renderer2) { };

  funMenu() {
    this.click = !this.click;
    if (this.click == true) {
      this.render.addClass(this.menuItems.nativeElement, "enable");
    } else {
      this.render.removeClass(this.menuItems.nativeElement, "enable");
    }
  }
}

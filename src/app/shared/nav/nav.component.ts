import { Component, ElementRef, inject, Renderer2, viewChild, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { PerfilComponent } from '../../components/perfil/perfil.component';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, MatAccordion, PerfilComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  @ViewChild('menuItems') menuItems!: ElementRef;
  private click = false;
  isOpen = false;
  private render: Renderer2 = inject(Renderer2);

  accordion = viewChild.required(MatAccordion);

  funMenu() {
    this.click = !this.click;
    if (this.click == true) {
      this.render.addClass(this.menuItems.nativeElement, "enable");
    } else {
      this.render.removeClass(this.menuItems.nativeElement, "enable");
    }
  }

 
}

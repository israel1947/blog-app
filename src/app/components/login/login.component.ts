import { Component } from '@angular/core';
import { environment } from "../../../enviroments/enviroments";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  client_id:string = environment.client_id

}

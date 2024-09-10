import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleSigninButtonModule, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { environment } from "../../../enviroments/enviroments";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  client_id: string = environment.client_id;

  constructor(private authService: SocialAuthService) { };

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
    });
  }
}

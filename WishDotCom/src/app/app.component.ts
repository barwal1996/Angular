import { Component } from '@angular/core';
import { AuthenticationService} from './Service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WishDotCom';
  constructor(public loginService:AuthenticationService){}
}

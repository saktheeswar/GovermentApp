import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email:string = ''
password:string = ''

  constructor(private authServie:AuthService){
  }
  ngOnInit():void{

  }

  login(){
    if(this.email =''){
      alert('Please enter the email')
      return;
    }
    if(this.password =''){
      alert('Please enter the email')
      return;
    }
    this.authServie.login(this.email,this.password)
    this.email= ''
    this.password =''
  }
}

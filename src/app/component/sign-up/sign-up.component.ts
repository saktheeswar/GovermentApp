import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers:[AuthService]
})
export class SignUpComponent {
  email:string = ''
  password:string = ''
  
    constructor(){
    }
    ngOnInit():void{
  
    }
    register(){
      if(this.email =''){
        alert('Please enter the email')
        return;
      }
      if(this.password =''){
        alert('Please enter the email')
        return;
      }
     // this.authService.signUp(this.email,this.password)
      this.email= ''
      this.password =''
    }
}

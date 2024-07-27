import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  email:string = ''
  password:string = ''
  
    constructor(private authServie:AuthService){
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
      this.authServie.signUp(this.email,this.password)
      this.email= ''
      this.password =''
    }
}

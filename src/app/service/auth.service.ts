import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private route: Router
  ) { }

  async login(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('authToken', 'true')
      this.route.navigate(['home'])
    }, err => {
      alert(err.message)
      this.route.navigate(['/login'])
    })
  }

  async signUp(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registred Sucessfully!!')
      this.route.navigate(['/login'])
    }, err => {
      alert(err.message)
      this.route.navigate(['/sign-up'])
    })
  }

  logout() {
    this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('authToken')
      this.route.navigate(['/login'])
    }, err => {
      alert(err.message)
    })
  }
}

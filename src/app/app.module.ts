import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire/compat"
import { environment } from "../environments/environment";
import { LoginComponent } from "./component/login/login.component";
import { HomeComponent } from "./component/home/home.component";
import { SignUpComponent } from "./component/sign-up/sign-up.component";
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from "./app.routes";
@NgModule({
    declarations: [AppComponent,
        LoginComponent,
        HomeComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        FormsModule,
        LoginComponent,
        HomeComponent,
        SignUpComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
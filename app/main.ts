
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { SignInComponent } from './SignIn/signin.component';
import { SignUpComponent } from './SignUp/signup.component';
import { routes } from './app.routes';



@NgModule({
  imports: [ BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, SignInComponent, SignUpComponent],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

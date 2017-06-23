import { Routes} from '@angular/router';
import { SignInComponent } from './SignIn/signin.component';
import { SignUpComponent } from './SignUp/signup.component';

export const routes: Routes = [
{ path: '', redirectTo: 'signUp', pathMatch: 'full' },
{ path: 'signIn', component: SignInComponent },
{ path: 'signUp', component: SignUpComponent }];


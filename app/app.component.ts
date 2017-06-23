import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'blog',
templateUrl: 'app/app.component.html',
styleUrls:['app/app.component.css']
 
})
export class AppComponent {
constructor(private router: Router) {}

  heading = "Bring out your passion !"
  heading2 = "Start writing."

onClick1()
{
this.router.navigate(['/signIn']);
}
onClick2()
{
this.router.navigate(['/signUp']);
}
}

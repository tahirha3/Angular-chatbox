import { Component } from '@angular/core';
// Bootstrap core css
import '../../public/css/bootstrap.min.css';
// Admin sb-2 Theme css
import '../../public/css/sb-admin-2.min.css';
// Custom App css
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Tour of Heroes';
}
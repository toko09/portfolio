import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  scrollTo(elementID: string) { 
    const element = document.getElementById(elementID)
    if (elementID == 'education') { 
      element?.scrollIntoView(false)

    } else
    {
      element?.scrollIntoView()
      
      }

  }
}

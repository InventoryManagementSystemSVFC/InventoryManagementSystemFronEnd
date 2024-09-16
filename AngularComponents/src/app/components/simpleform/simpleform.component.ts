import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {

    firstName: string = "";
    lastName: string = "";
    age = null;
    
    visible: boolean = false;



  showResult() {

      console.log(this.firstName);
      this.visible = true;
      
  } 

}
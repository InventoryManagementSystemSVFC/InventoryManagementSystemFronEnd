import { Component } from '@angular/core';

@Component({
  selector: 'app-showusername',
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {


  
    uname: string = "";
    isVisible: boolean = false;


    showUsername() { 

        this.isVisible =true;

    }
    


}

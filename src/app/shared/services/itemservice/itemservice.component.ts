import { Component } from '@angular/core';

@Component({
  selector: 'app-itemservice',
  imports: [],
  templateUrl: './itemservice.component.html',
  styleUrl: './itemservice.component.css'
})
export class ItemserviceComponent {
        constructor(){

        }
   welcome(para:any,comp:any){
          window.alert(`welcome to ${para} in ${comp}`)
        }
}

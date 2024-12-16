import { Component } from '@angular/core';

@Component({
  selector: 'app-toogle-image',
  imports: [],
  templateUrl: './toogle-image.component.html',
  styleUrl: './toogle-image.component.css'
})
export class ToogleImageComponent {
   img1:string="./images/redmi.jfif";
   img2:string="./images/pixel.jfif";
  changeImage(){
    this.img1=this.img2;
    this.img2!=this.img1;

  }

}

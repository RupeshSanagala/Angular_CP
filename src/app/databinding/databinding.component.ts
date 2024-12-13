import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  myName:string="rupesh sanagala";
  imgPath:string="./images/Charminar.jfif";
  imgName:string="charminar";

  inputData:string="GOAP";

  greeting(val:any){
    window.alert(`Good Morning ${val} `);
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
         isCond1:boolean=true;
         isCond2:boolean=false;
         isCond3:boolean=!true;

        courses:string[]=["React","angular","Java","C","C++"];
        myCourse:string="Java";

        myStyle={
          color:this.isCond1?"red":"green",
          backgroundcolor:this.isCond2?"blue":"yellow",
          fontsize:this.isCond3?"40px":"20px"
        }
        myClass={
          "txtPrimary":this.isCond1,
          "txtDanger":this.isCond2,
          "special":!this.isCond3
        }
}

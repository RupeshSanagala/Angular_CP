import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CubePipe } from '../shared/customPipe/cube.pipe';

@Component({
  selector: 'app-mypipes',
  imports: [CommonModule,CubePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
 msg:string="welcome Mr rupesh,How are you?"
 emp={
  "id":4569,
  "name":"Rupesh",
  "gender":"male"
 }
 dateObj = new Date();
}

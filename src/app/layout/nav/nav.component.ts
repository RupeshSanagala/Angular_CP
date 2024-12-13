import { Component } from '@angular/core';
import { MainDashBoardComponent } from '../main-dash-board/main-dash-board.component';
import { AngFormComponent } from '../../Forms/ang-form/ang-form.component';
import { DatabindingComponent } from '../../databinding/databinding.component';
import { ParentComponent } from '../../parent/parent.component';
import { MypipesComponent } from '../../mypipes/mypipes.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [MainDashBoardComponent,AngFormComponent,ParentComponent,DatabindingComponent,MypipesComponent,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}

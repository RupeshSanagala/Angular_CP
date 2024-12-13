import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-main-dash-board',
  imports: [RouterOutlet,NavComponent,FooterComponent,AppComponent],
  templateUrl: './main-dash-board.component.html',
  styleUrl: './main-dash-board.component.css'
})
export class MainDashBoardComponent {

  

}

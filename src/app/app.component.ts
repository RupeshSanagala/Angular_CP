import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ToogleImageComponent } from './toogle-image/toogle-image.component';
import { ParentComponent } from './parent/parent.component';
import { MypipesComponent } from './mypipes/mypipes.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ToogleImageComponent,ParentComponent,MypipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}

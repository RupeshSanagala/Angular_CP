import { Component } from '@angular/core';
import { commonImgPath } from '../shared/constant/constantData';
import { ItemserviceComponent } from '../shared/services/itemservice/itemservice.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
     itemObj = new ItemserviceComponent();
        myitems:any[]=[
          {name:"charminar",price:30,description:"charminar is in Hyderbad",imgPath:commonImgPath.charminar},
          {name:"tirupati",price:300,description:"tirupati is in Andhra",imgPath:commonImgPath.tirupati},
          {name:"audio",price:30,description:"charminar is in Hyderbad",imgPath:commonImgPath.audio},
          {name:"video1",price:30,description:"charminar is in Hyderbad",imgPath:commonImgPath.audio}
        ]
}

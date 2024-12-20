import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
     constructor(public dbObj:DbserviceService,public routerObj:Router){}

     addData(data:any){
      console.log(data);
      this.dbObj.addRecord("products",data).subscribe(()=>{
        window.alert("product added successfully");
        this.routerObj.navigate(["/maindashboard/productDash"])
      })
     }
  

}

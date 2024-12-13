import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  id:any;
  proData:any;

  constructor(private actRoute:ActivatedRoute, private dbObj:DbserviceService, private routerObj:Router){}

  ngOnInit(){
    this.actRoute.params.subscribe((param:any)=>{
      // console.log(param);
      this.id= param.id;
      this.dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
        // console.log(res);
        this.proData={...res};
      })
    })
  }
  editData(val:any){
    this.dbObj.updateRecord("products",this.id,val).subscribe(()=>{
      // console.log(res); 
      window.alert("product updated successfully");
      this.routerObj.navigate(["/maindashboard/productDash"]);
    })
  }

}

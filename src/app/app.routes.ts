import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { AngFormComponent } from './Forms/ang-form/ang-form.component';
import { UtdfComponent } from './Forms/utdf/utdf.component';
import { RtfComponent } from './Forms/rtf/rtf.component';
import { MainDashBoardComponent } from './layout/main-dash-board/main-dash-board.component';
import { ParentComponent } from './parent/parent.component';
import { ItemComponent } from './item/item.component';
import { ProductDashComponent } from './CRUD/product-dash/product-dash.component';
import { ProductAddComponent } from './CRUD/product-add/product-add.component';
import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    //naming component
    {path:'login',component:LoginComponent},
    
    // Redirect Routing
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"maindashboard",component:MainDashBoardComponent,children:[
        {path:"parent",component:ParentComponent},
        {path:"item",component:ItemComponent},
        {path:"productDash",component:ProductDashComponent},
        {path:"productAdd",component:ProductAddComponent},
        {path:"productEdit/:id",component:ProductEditComponent},
        {path:"databinding",component:DatabindingComponent},
        // Parameterized Routing
    {path:"mypipe/:id",component:MypipesComponent},
    // child Routing
    {path:"angform", component:AngFormComponent,children:[
        {path:"utdf",component:UtdfComponent},
        {path:"rtf",component:RtfComponent}
    ]},
    ]},
    
    // wildcard routing
    {path:"**",component:PageNotFoundComponent}
];

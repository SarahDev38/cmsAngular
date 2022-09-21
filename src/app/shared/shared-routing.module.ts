import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryItemComponent} from "./components/category-item/category-item.component";
import {CategoryListComponent} from "./components/category-list/category-list.component";

const routes: Routes = [
/*  {path: '', component: CategoryListComponent},
  {path: ':id', component: CategoryItemComponent}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

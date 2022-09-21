import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SharedModule} from "../shared/shared.module";
import {CategoryListComponent} from "../shared/components/category-list/category-list.component";
import {CategoryItemComponent} from "../shared/components/category-item/category-item.component";


@NgModule({
  declarations: [
    HomePageComponent
  ], imports: [
    CommonModule,
    SharedModule
  ], exports: [
    HomePageComponent,
    CategoryListComponent,
    CategoryItemComponent
  ]
})
export class HomePageModule {
}

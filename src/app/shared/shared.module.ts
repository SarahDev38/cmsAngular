import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CategoryService} from "./services/category.service";
import {ShortenPipe} from "./pipes/shorten.pipe";
import {RouterLink} from "@angular/router";
import {CategoryListComponent} from "./components/category-list/category-list.component";
import {CategoryItemComponent} from "./components/category-item/category-item.component";
import {CategorySingleComponent} from "./components/category-single/category-single.component";
import {TitleColorDirective} from "./directives/titleColor.directive";
import {RegisterComponent} from "./components/register/register.component";
import {UserService} from "./services/user.service";
import {LoginComponent} from "./components/login/login.component";


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryItemComponent,
    CategorySingleComponent,
    RegisterComponent,
    LoginComponent,
    ShortenPipe,
    TitleColorDirective
  ], imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterLink
  ], exports: [
    CategoryListComponent,
    CategoryItemComponent,
    CategorySingleComponent,
    RegisterComponent,
    LoginComponent,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ShortenPipe,
    TitleColorDirective
  ], providers: [
    CategoryService,
    UserService
  ]
})
export class SharedModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/components/home-page/home-page.component";
import {CategoryListComponent} from "./shared/components/category-list/category-list.component";
import {CategorySingleComponent} from "./shared/components/category-single/category-single.component";
import {RegisterComponent} from "./shared/components/register/register.component";
import {LoginComponent} from "./shared/components/login/login.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'barrages', component: CategoryListComponent},
  {path: 'barrages/:id', component: CategorySingleComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(modules => modules.AdminModule)
  }, {
    path: 'projets',
    loadChildren: () => import('./project/project.module').then(modules => modules.ProjectModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

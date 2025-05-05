import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ShowDetailComponent } from './page/show-detail/show-detail.component';
import { ShowListComponent } from './page/show-list/show-list.component';
import { GenresComponent } from './page/genres/genres.component';
import { LoginComponent } from './page/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'List/:type', component:ShowListComponent},
  {path:'home/detail/:id/:type', component:ShowDetailComponent},
  {path:'genres', component:GenresComponent},
  {path:'genres/:genreId', component:GenresComponent},
  {path:'admin',canActivate:[authGuard],loadChildren: () => import('./module/admin/admin.module').then((m)=> m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

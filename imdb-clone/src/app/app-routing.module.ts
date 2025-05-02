import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ShowDetailComponent } from './page/show-detail/show-detail.component';
import { ShowListComponent } from './page/show-list/show-list.component';
import { GenresComponent } from './page/genres/genres.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'List/:type', component:ShowListComponent},
  {path:'home/detail/:id/:type', component:ShowDetailComponent},
  {path:'genres', component:GenresComponent},
  {path:'genres/:genreId', component:GenresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

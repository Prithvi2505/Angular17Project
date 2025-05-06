import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ShowDetailComponent } from './page/show-detail/show-detail.component';
import { ShowListComponent } from './page/show-list/show-list.component';
import { GenresComponent } from './page/genres/genres.component';
import { LoginComponent } from './page/login/login.component';
import { authGuard } from './guard/auth.guard';
import { NewMovieListComponent } from './page/new-movie-list/new-movie-list.component';
import { NewMovieFormComponent } from './page/new-movie-form/new-movie-form.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'home', component:HomeComponent,canActivate:[authGuard]},
  {path:'List/:type', component:ShowListComponent,canActivate:[authGuard]},
  {path:'home/detail/:id/:type', component:ShowDetailComponent,canActivate:[authGuard]},
  {path:'genres', component:GenresComponent,canActivate:[authGuard]},
  {path:'genres/:genreId', component:GenresComponent,canActivate:[authGuard]},
  {path:'addmovie', component:NewMovieFormComponent,canActivate:[authGuard]},
  {path:'newmovie', component:NewMovieListComponent,canActivate:[authGuard]},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

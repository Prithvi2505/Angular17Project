import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from '../../page/home/home.component';
import { ShowListComponent } from '../../page/show-list/show-list.component';
import { ShowDetailComponent } from '../../page/show-detail/show-detail.component';
import { GenresComponent } from '../../page/genres/genres.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent,children: [
      {path:'home', component:HomeComponent},
      {path:'List/:type', component:ShowListComponent},
      {path:'home/detail/:id/:type', component:ShowDetailComponent},
      {path:'genres', component:GenresComponent},
      {path:'genres/:genreId', component:GenresComponent},
      {path:'',redirectTo:'admin/home',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { GenersComponent } from './page/geners/geners.component';
import { ShowDetailComponent } from './page/show-detail/show-detail.component';
import { ShowListComponent } from './page/show-list/show-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'List/:type', component:ShowListComponent},
  {path:'geners',component:GenersComponent},
  {path:'detail/:id/:type', component:ShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

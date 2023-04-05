import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { SelectionComponent } from './selection/selection.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PreviewComponent } from './preview/preview.component';
const routes: Routes = [
{ path: 'Home', component: HomeComponent },
{ path: 'selection', component: SelectionComponent },
{ path: 'login', component: AuthentificationComponent },
{ path: 'Preview', component: PreviewComponent },
{ path: '',   redirectTo: '/Home', pathMatch: 'full' },
{ path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

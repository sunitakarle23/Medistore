import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { AuthGuard } from './components/auth/auth.guard';
import { contentRoutes } from './shared/routes/content-routes';


const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: '', component: ContentLayoutComponent, children: contentRoutes, canActivate: [AuthGuard] }
  // { path: '', component: ContentLayoutComponent, children: contentRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

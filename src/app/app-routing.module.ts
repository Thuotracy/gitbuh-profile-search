import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'repo', component: RepoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: 'groups',
    loadChildren: () =>
      import('./core/groups/groups.module').then((m) => m.GroupsModule),
  }, // Lazy loading for GroupsModul
  {
    path: 'news',
    loadChildren: () =>
      import('./core/news/news.module').then((m) => m.NewsModule),
  }, // Lazy loading for NewsModule
  {
    path: 'people',
    loadChildren: () =>
      import('./core/people/people.module').then((m) => m.PeopleModule),
  }, // Lazy loading for PeopleModule
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

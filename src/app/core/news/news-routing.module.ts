import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { authGuardGuard } from 'src/app/shared/auth-guard.guard';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: ':newId',
    component: NewsDetailComponent,
    canActivate: [authGuardGuard],
  },
  { path: '', component: NewsComponent, canActivate: [authGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}

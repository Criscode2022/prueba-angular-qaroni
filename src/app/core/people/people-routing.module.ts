import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuardGuard } from 'src/app/shared/auth-guard.guard';
import { PeopleComponent } from './people.component';

const routes: Routes = [
  { path: '', component: PeopleComponent, canActivate: [authGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}

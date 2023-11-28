import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuardGuard } from 'src/app/shared/auth-guard.guard';
import { GroupsComponent } from './groups.component';
import { GroupDetailsComponent } from './group-details/group-details.component';

const routes: Routes = [
  {
    path: ':groupId',
    component: GroupDetailsComponent,
    canActivate: [authGuardGuard],
  },
  { path: '', component: GroupsComponent, canActivate: [authGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}

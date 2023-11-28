import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { GroupsRoutingModule } from './groups-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { GroupDetailsComponent } from './group-details/group-details.component';

@NgModule({
  declarations: [GroupsComponent, GroupDetailsComponent],
  imports: [CommonModule, GroupsRoutingModule, MatIconModule],
})
export class GroupsModule {}

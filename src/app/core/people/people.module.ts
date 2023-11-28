import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleComponent } from './people.component';
import { ResultsComponent } from './results/results.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PeopleComponent, ResultsComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
})
export class PeopleModule {}

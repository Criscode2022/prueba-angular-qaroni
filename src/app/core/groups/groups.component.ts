import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent {
  isLoading: boolean = false;
  groups: any[] = [];
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  viewDetails(groupId: number) {
    this.router.navigate(['/groups', groupId]);
  }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.isLoading = true;
    this.http
      .get<any>('https://rest.apistaging.plaam.com/v1/merchants/80/groups')
      .pipe(map((response) => response.result))
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.groups = data;
          console.log('Group data:', this.groups);
        },
        (error) => {
          this.isLoading = false;
          this.error = 'Error al cargar los grupos';
          console.error('Error al cargar los grupos:', error);
        }
      );
  }
}

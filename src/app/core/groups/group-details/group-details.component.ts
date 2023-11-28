import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css'],
})
export class GroupDetailsComponent implements OnInit {
  groupDetail: any;
  isLoading = false;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const groupId = params.get('groupId');
          return this.loadNewsDetail(groupId);
        })
      )
      .subscribe(
        (data) => {
          this.groupDetail = data.result[0];
        },
        (error) => {
          this.error = 'Error al cargar los detalles de la noticia';
          console.error('Error:', error);
        }
      );
  }

  loadNewsDetail(groupId: string | null): Observable<any> {
    this.isLoading = true;
    return this.http.get(
      `https://rest.apistaging.plaam.com/v1/merchants/80/groups/${groupId}`
    );
  }
}
{
}

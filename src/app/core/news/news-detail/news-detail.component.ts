import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  newsDetail: any;
  isLoading = false;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const newId = params.get('newId');
          return this.loadNewsDetail(newId);
        })
      )
      .subscribe(
        (data) => {
          this.newsDetail = data.result[0];
          this.isLoading = false;
        },
        (error) => {
          this.error = 'Error al cargar los detalles de la noticia';
          this.isLoading = false;
          console.error('Error:', error);
        }
      );
  }

  loadNewsDetail(newId: string | null): Observable<any> {
    this.isLoading = true;
    return this.http.get(
      `https://rest.apistaging.plaam.com/v1/merchants/80/news/${newId}`
    );
  }
}

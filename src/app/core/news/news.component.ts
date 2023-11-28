import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  isLoading: boolean = false;
  news: any[] = [];
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  viewDetails(newId: number) {
    this.router.navigate(['/news', newId]);
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.isLoading = true;
    this.http
      .get<any>('https://rest.apistaging.plaam.com/v1/merchants/80/news')
      .pipe(map((response) => response.result))
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.news = data;
          console.log('News data:', this.news);
        },
        (error) => {
          this.isLoading = false;
          this.error = 'Error al cargar las noticias';
          console.error('Error al cargar las noticias:', error);
        }
      );
  }
}

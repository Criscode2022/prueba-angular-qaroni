import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { MatCardModule } from '@angular/material/card';
import { NewsRoutingModule } from './news-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NewsComponent, NewsDetailComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    NewsRoutingModule,
  ],
})
export class NewsModule {}

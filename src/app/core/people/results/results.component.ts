import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  @Input() personData: any[] = [];

  personColumns: string[] = ['name', 'age'];
  childrenColumns: string[] = ['name', 'age'];
  moviesColumns: string[] = ['name', 'director', 'year', 'wonOscar'];

  ngOnInit(): void {}
}

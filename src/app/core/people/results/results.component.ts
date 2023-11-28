import { Component, Input } from '@angular/core';
import { Person } from 'src/main';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  @Input() personData: Person[] = [];

  ngOnInit(): void {}
}

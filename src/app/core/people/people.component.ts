import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Person } from 'src/main';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  peopleForm!: FormGroup;
  latestData!: Person;
  error: string = '';
  isLoading: boolean = false;
  personData: Person[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.peopleForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      children: this.fb.array([]),
      favoriteMovies: this.fb.array([]),
    });

    this.personData = JSON.parse(localStorage.getItem('personData') || '[]');
    console.log(this.personData);
  }

  get children(): FormArray {
    return this.peopleForm.get('children') as FormArray;
  }

  addChild(): void {
    const childGroup = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.max(17)]],
    });
    this.children.push(childGroup);
  }

  get favoriteMovies(): FormArray {
    return this.peopleForm.get('favoriteMovies') as FormArray;
  }

  addMovie(): void {
    const movieGroup = this.fb.group({
      name: ['', Validators.required],
      director: ['', Validators.required],
      year: ['', Validators.required],
      wonOscar: [false],
    });
    this.favoriteMovies.push(movieGroup);
  }

  onSubmit(): void {
    if (this.peopleForm.valid) {
      //If there isn't any data in local storage, it creates an empty array
      const storedData = JSON.parse(localStorage.getItem('personData') || '[]');

      //Push the new data to the array and save it in local storage

      storedData.push(this.peopleForm.value);

      localStorage.setItem('personData', JSON.stringify(storedData));

      this.latestData = this.peopleForm.value;

      this.personData = JSON.parse(localStorage.getItem('personData') || '[]');

      //Reset the form after submit

      this.peopleForm.reset();

      this.peopleForm.setControl('children', this.fb.array([]));
      this.peopleForm.setControl('favoriteMovies', this.fb.array([]));
    } else {
      this.error = 'Por favor, rellena todos los campos requeridos.';
    }
  }
}

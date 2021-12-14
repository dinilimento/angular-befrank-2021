import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { PersonDal } from 'src/app/dal/person.dal';
import { Person } from 'src/app/models/person';
import { TForm } from 'src/app/typed-forms';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.page.html',
  styleUrls: ['./observable.page.css'],
})
export class ObservablePage implements OnInit {
  form!: TForm<Person>;
  persons?: Person[];
  query = new FormControl();

  get c() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, private personDal: PersonDal) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [, [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
      birthDate: [, Validators.required],
      photoUrl: [, Validators.required],
    }) as TForm<Person>;

    this.personDal.getAll().subscribe((persons) => {
      console.log('nieuwe lijst van persons:', persons);
      this.persons = persons;
    });

    this.query.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(x => !!x)
      )
      .subscribe(() => this.autocomplete());
  }

  addPersonReactive() {
    console.log('Persoon toevoegen:', this.form.value);
    this.personDal.add(this.form.value);
  }

  autocomplete() {
    console.log('autocompleting 2!', this.query.value);
  }
}

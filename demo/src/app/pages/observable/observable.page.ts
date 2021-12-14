import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonDal } from 'src/app/dal/person.dal';
import { Person } from 'src/app/models/person';
import { TForm } from 'src/app/typed-forms';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.page.html',
  styleUrls: ['./observable.page.css']
})
export class ObservablePage implements OnInit {
  form!: TForm<Person>;
  persons?: Person[];

  get c() {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private personDal: PersonDal) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [, [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
      birthDate: [, Validators.required],
      photoUrl: [, Validators.required],
    }) as TForm<Person>;

    this.personDal.getAll().subscribe(persons => {
      console.log('nieuwe lijst van persons:', persons);
      this.persons = persons;
    });
  }

  addPersonReactive() {
    console.log('Persoon toevoegen:', this.form.value);
    this.personDal.add(this.form.value);
  }
}

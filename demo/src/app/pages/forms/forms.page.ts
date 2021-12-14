import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TForm } from 'src/app/typed-forms';
import { Person } from '../../models/person';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.css'],
})
export class FormsPage implements OnInit {
  form!: TForm<Person>;

  newPerson = {} as Person;

  get c() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder) {} // DI

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [, [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
      birthDate: [, Validators.required],
      photoUrl: [, Validators.required],
    }) as TForm<Person>;

    setTimeout(() => {
      this.form.setValue({
        name: 'JP',
        birthDate: '2004-07-14',
        photoUrl: 'bla.jpg',
      });
    }, 2000);
  }

  addPersonReactive() {
    console.log('Persoon toevoegen:', this.form.value);
  }

  addPersonTemplate() {
    console.log('Persoon toevoegen:', this.newPerson);
  }
}

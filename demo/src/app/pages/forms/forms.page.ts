import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TForm } from 'src/app/typed-forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.css']
})
export class FormsPage implements OnInit {

  form: TForm<Person> = new FormGroup({
    name: new FormControl(undefined, [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]),
    birthDate: new FormControl(undefined, Validators.required),
    photoUrl: new FormControl(undefined, Validators.required)
  }) as TForm<Person>;

  newPerson = {} as Person;

  get c() {
    return this.form.controls;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setValue({
        name: 'JP',
        birthDate: '2004-07-14',
        photoUrl: 'bla.jpg'
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

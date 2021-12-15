import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Person } from '../models/person';

@Injectable({ providedIn: 'root' }) // Angular 6-8 // singleton
export class PersonDal {
  private subject = new BehaviorSubject<Person[]>([]);
  private persons: Person[] = [];
  private havePersonsBeenRetrieved = false;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    if (!this.havePersonsBeenRetrieved) {
      this.http
        .get<Person[]>('http://localhost:3000/persons')
        .subscribe((persons) => {
          this.persons = persons.concat(this.persons);
          this.subject.next(this.persons);
          this.havePersonsBeenRetrieved = true;
        });
    }

    return this.subject;
  }

  add(newPerson: Person) {
    this.http
      .post<Person>('http://localhost:3000/persons', newPerson)
      .subscribe((updatedPerson) => {
        this.persons.push(updatedPerson);
        this.subject.next(this.persons);
      });
  }
}

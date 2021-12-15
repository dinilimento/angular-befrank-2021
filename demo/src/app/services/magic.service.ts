import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MagicService {
  getMagicNumber() {
    let subject = new Subject<number>();

    let n = 4;

    setInterval(() => {
      subject.next(n);
      n += 3;
    }, 2000);

    return subject.asObservable();
  }
}

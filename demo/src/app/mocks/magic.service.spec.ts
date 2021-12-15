import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class MagicServiceMock {
    getMagicNumber() {
        return of(5);
    }
}

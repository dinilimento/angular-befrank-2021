# Notes

## Formulieren

- template-driven: alles in template
- model-driven: formdefinitie in TypeScript

template vs model?

- Model-driven is makkelijker te testen
- Custom validators
  - Model-driven is het gewoon een functie
  - Template-driven moet je een directive gaan maken
- Template is "alles bij elkaar"
  - AngularJS
  - Er was ooit praat om dit te deprecaten


[(ngModel)]
banana in a box
<input [value]=".." (input)="...">

ng-pristine = waarde ongewijzigd
ng-dirty = waarde gewijzigd

ng-invalid = invalid
ng-valid

ng-touched = focus gehad / blur
ng-untouched



nog verder gaan met formulieren:
- custom validators
- custom async validators
- dynamische formulierelementen
  - FormArray

  ```html
  persons  - 4

  *ngFor=""
  [ ]
  [ ]
  [ ]
  [ ]
  ```

- custom form controls (zo advanced als je kan gaan)

  checkbox  =>  [on     ]

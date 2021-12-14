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

## Node en npm

```sh
npm start => package.json => ng serve   # van je lokale node_modules

npx ng serve # ook lokale node_modules

nvm # voor meerdere node.js-versies
```


## Data access layer

Steeds relevanter stukje abstractie nu data ophalen steeds vaker op verschillende manieren

- AJAX
- gRPC
- WebSockets
- Server-sent events
- WebRTC    gebruiker <===> gebruiker
- heeeuuuull nieuw. WebTransport

### Lijst verversen

Hoe komt mijn toegevoegde item in mijn lijst?

1. Je lokale entity .next()en
=> je mist een id / niet meer in sync met server
=> als je POST stukgaat, dan heb je iets in je UI
=> supersnel
=> Optimistic UI

2. De bijgewerkte entity .next()en
=> duurt iets langer
=> je bent meer in sync met de server: je hebt je id
=> errorhandling komt meestal goedkoop

3. De volledige lijst opnieuw ophalen
=> duurt veruit het langst
=> je bent volledig in sync
=> errorhandling komt meestal goedkoop
=> gemak van implementatie
=> meest belastend voor je servers


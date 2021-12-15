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



## Change detection

dirty checking van databindingexpressies: oldVal === newVal
*ngFor deep compare

```html
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}
{{name}}


{{doeIets()}}
// functie-aanroep tijdens databinden is een geel vlaggetje. Het is niet verboden, er zijn goede use cases voor, maar 
// wees bewust van wat je daar doet.
```

```html
<button (click)="changeName()">Verander naam</button>
```
```ts
changeName() {
	this.name = 'iets anders';
}
```

```html
<crud-table>

	<td>
		{{column.textValue}}

		<input [(ngModel)]="column.value">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'bool'">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'password'">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'radio'">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'lookup'">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'bool'">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'bool'">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'bool'">
		<input [(ngModel)]="column.value" type="checkbox" *ngIf="column.type == 'bool'">

	</td>

</crud-table>
```

17 per cel x 5 kolommen x 20 rijen = 1700 databindingexpressies

AngularJS - max. 2000 databindingexpressies
Angular 2+ - honderdenduizenden

"branch prediction"

@ runtime worden er "change detectors" gegenereerd die specialisten zijn in het bijhouden
van of er iets gewijzigd is bij een component. Deze kunnen een stuk beter worden gebranchpredict
dan een hele grote functie met veel if-statements.



OnChanges staat redelijk los van het "echte" change detection: checkt simpelweg @Input()  oldVal === newVal
DoCheck


### Zone.js

"open-heart surgery on the browser"

```ts
let originalTimeout = window.setTimeout;
window.setTimeout = (callback, ms) => {

	originalTimeout(() => {
		callback();
		runChangeDetection();
	}, ms);
};
```

```ts
// native dingen overschrijven was vroeger nooit heel tof
undefined = 'hoi';
```

Maar nog nooit problemen gehad met de wrapper van Zone.js


Een pagina kan met Zone.js worden opgedeeld in meerdere zones die onafhankelijk diagnostische informatie
bijhouden over timeouts en dergelijke. Angular kiest voor 1 almachtige zone: `NgZone`

## Modules

Angular modules???

- Groeperen van functionaliteit
- Delen over projecten
  => npm publish
- Encapsulatie
- Optimalisatie


- Lazy loading
- Makkelijker unittesten



Modules sharen:

- npm private registry - enterprise registry
- npm link
- npm install-local   https://www.npmjs.com/package/install-local
- ng generate library shared

## Unittesten

karma - test runner
jasmine - test framework (assertions)  it() describe() mocks
istanbul - code coverage

ng test --code-coverage

### Mocking

```ts
// duck typing

class A {
	doeIets() { }
}
class B {
	doeIets() { }
}
let iets: A = new B();
```

Als je mock classes genoeg overeen komen met de echte class, dan kun je deze relatief eenvouding patchen.


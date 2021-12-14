// promise??
// async ding
// object resolven bij retourneren
// sinds ES2015 standaard in de browser
// > 10 jaar aanwezig in web development

// toekomstige output van een functie

// fallback

let prom = new Promise((resolve, reject) => {
  console.log("Promise starten");

  // async werk
  setTimeout(() => {
    console.log("Promise klaar");
    resolve(4);
    // resolve(8);
    // resolve(15);
    // reject(new Error('Mijn error'));
    // resolve(16);
    // resolve(23);
    // resolve(42);
  }, 3000);
});

// cypress: end-to-end testing / UI testing
// - promises

// prom.then((result) => console.log("Promise result:", result));

// Immediately Invoked Arrow Function Expression
// (async () => {
//   let result = await prom;
//   console.log("awaited result:", result);
// })();

let source = new rxjs.Observable((subject) => {
  console.log("Observable starten");

  // async werk
  setTimeout(() => {
    console.log("Observable klaar");
    subject.next(4);
    subject.next(8);
    subject.next(15);

    setTimeout(() => {
      subject.next(16);
      subject.next(23);
      subject.next(42);
    }, 2000);
  }, 3000);
});
// let subscription = source.subscribe((result) =>
//   console.log("Observable result:", result)
// );
// setTimeout(() => {
//   console.log("unsubscribing");
//   subscription.unsubscribe();
// }, 4000);

/* promises vs observables

- promises zijn eager, observables zijn lazy
  => this.http.post<>('..', {}).subscribe();

- een hoop observables moet je unsubscriben
  => de default uitzondering zijn de observables die je terugkrijgt van de HttpClient => .complete()

*/

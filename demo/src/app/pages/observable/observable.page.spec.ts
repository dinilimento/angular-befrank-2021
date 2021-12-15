import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MockProvider } from "ng-mocks";
import { of } from "rxjs";
import { PersonDal } from "src/app/dal/person.dal";
import { ObservablePage } from "./observable.page";

describe('Page: Observable', () => {
    let sut: ObservablePage;
    let personDal: jasmine.SpyObj<PersonDal>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ObservablePage],
            imports: [ReactiveFormsModule],
            providers: [MockProvider(PersonDal)]
        });
        personDal = TestBed.inject(PersonDal) as jasmine.SpyObj<PersonDal>;
        personDal.getAll.and.returnValue(of([]));

        sut = TestBed.createComponent(ObservablePage).componentInstance;
    });
    
    // describeception
    describe('autocompleting', () => {
        beforeEach(() => {
            spyOn(sut, 'autocomplete');
            sut.ngOnInit();
        });

        it('should autocomplete with new unique values', fakeAsync (() => {
            sut.query.setValue('e');
            tick(300);
    
            expect(sut.autocomplete).toHaveBeenCalled();
        }));
    
        it('should not autocomplete when the query is the same as the previous', fakeAsync (() => {
            sut.query.setValue('e');
            tick(300);
    
            (sut.autocomplete as jasmine.Spy).calls.reset();
            sut.query.setValue('e');
            tick(300);
    
            expect(sut.autocomplete).not.toHaveBeenCalled();
        }));
    
        it('should not autocomplete when the query is something empty', fakeAsync (() => {
            sut.query.setValue('');
            tick(300);
    
            expect(sut.autocomplete).not.toHaveBeenCalled();
        }));
    });
});
import { MagicServiceMock } from "src/app/mocks/magic.service.spec";
import { MagicService } from "src/app/services/magic.service";
import { TestPage } from "./test.page";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { getDefaultMockProviders } from "src/app/mocks/provider-helpers.spec";
import { ngMocks, MockProvider, MockComponent } from 'ng-mocks';
import { CarViewerComponent } from "src/app/components/car-viewer/car-viewer.component";

ngMocks.autoSpy('jasmine');

describe('Page: Test', () => {
    let sut: TestPage; // system under test
    let magicServiceMock: jasmine.SpyObj<MagicService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestPage, MockComponent(CarViewerComponent)],
            imports: [],
            providers: [MockProvider(MagicService)]
        });
        magicServiceMock = TestBed.inject(MagicService) as jasmine.SpyObj<MagicService>;
        magicServiceMock.getMagicNumber.and.returnValue(of(484));

        sut = TestBed.createComponent(TestPage).componentInstance;
    });

    it('should retrieve the magic number', () => {
        sut.ngOnInit();
        
        expect(magicServiceMock.getMagicNumber).toHaveBeenCalled();
        expect(sut.currentMagicNumber).toBe(484);
    });
});
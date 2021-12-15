import { MockComponent } from 'ng-mocks';
import { CarViewerComponent } from '../components/car-viewer/car-viewer.component';

export function getDefaultComponents() {
    return [
        MockComponent(CarViewerComponent)
    ];
}
import { MagicService } from "../services/magic.service";
import { MockProvider } from 'ng-mocks';


export function getDefaultMockProviders() {
    return [
        MockProvider(MagicService)
    ];
}

export function getDefaultComponents() {
    
}
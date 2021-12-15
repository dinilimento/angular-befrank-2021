import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[focusOn]'
})
export class FocusOnDirective {
	@Input() set focusOn(condition: boolean) {
		if (condition) {
			setTimeout(() => { this.el.nativeElement.focus(); }, 0);
		}
	}

	constructor(private el: ElementRef) { }
}

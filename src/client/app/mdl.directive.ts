import { Directive, AfterViewChecked } from '@angular/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MDLDirective implements AfterViewChecked {

	componentHandler: any = componentHandler.upgradeDom();
	
    ngAfterViewChecked() {
        if (componentHandler) {
            componentHandler.upgradeAllRegistered();
        }
    }
}


import {Component} from 'angular2/core';
import {NewComponentComponent} from "./new-component.component";

@Component({
    selector: 'my-app',
    template: `
        <new-component></new-component>
    `,
    directives: [NewComponentComponent]
})
export class AppComponent {

}

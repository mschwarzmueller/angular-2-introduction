import {Component} from 'angular2/core';
import {jQueryComponent} from "./jquery.component";

@Component({
    selector: 'my-app',
    template: `
        <my-jquery></my-jquery>
    `,
    directives: [jQueryComponent]
})
export class AppComponent {

}

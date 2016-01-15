import {Component} from 'angular2/core';
import {ContactListComponent} from "./contacts/contact-list.component";

@Component({
    selector: 'app',
    template: `
        <contact-list></contact-list>
    `,
    directives: [ContactListComponent]
})
export class AppComponent {

}

import {Component} from "angular2/core";
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
    selector: "contact",
    template: `
    <input [(ngModel)]="contact.firstName" type="text">
    <div>
        Phone Number: {{contact.phone}}<br>
        E-Mail: {{contact.email}}
    </div>
    <form>
        <input type="text" #firstName>
        <input type="text" #lastName>
        <button (click)="onCreateNewContact(firstName.value, lastName.value)" >New Contact</button>
    </form>
    `,
    inputs: ["contact"],
    providers: [ContactService]
})
export class ContactComponent {
    public contact = {};

    constructor(private _contactService: ContactService) {}

    onCreateNewContact(firstName: string, lastName: string) {
        const contact: Contact = {firstName: firstName, lastName: lastName, phone: "0113  423525", email: "test@test.com"};
        this._contactService.insertContact(contact);
    }
}

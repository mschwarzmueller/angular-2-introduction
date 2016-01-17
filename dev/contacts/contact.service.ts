import {Injectable} from "angular2/core";
import {CONTACTS} from "./mock-contact";
import {Contact} from "./contact";

@Injectable()
export class ContactService {
    getContacts() {
        return Promise.resolve(CONTACTS);
    }

    insertContact(contact: Contact) {
        Promise.resolve(CONTACTS).then((contacts: Contact[]) => contacts.push(contact));
    }
}
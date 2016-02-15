import {Component} from 'angular2/core';
import {ControlGroup} from "angular2/common";
import {FirebaseService} from "./firebase.service";

@Component({
    selector: 'my-app',
    template: `
        <div class="flex">
            <div id="set-user" class="container">
                <h2>Set a user</h2>
                <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                    <div>
                        <label for="first-name">First Name</label>
                        <input type="text" ngControl="firstName">
                    </div>
                    <div>
                        <label for="last-name">Last Name</label>
                        <input type="text" ngControl="lastName">
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div id="get-user" class="container">
                <h2>Get User</h2>
            <button (click)="onGetUser()">Get User</button>
            </div>
        </div>
        <div class="container" id="response">Response: {{response}}</div>
    `,
    providers: [FirebaseService]
})
export class AppComponent {
    response:string;

    constructor(private _firebaseService:FirebaseService) {
    }

    onSubmit(form:ControlGroup) {
        this._firebaseService.setUser(form.value.firstName, form.value.lastName)
            .subscribe(
                user => this.response = JSON.stringify(user),
                error => console.log(error)
            );
    }

    onGetUser() {
        this._firebaseService.getUser()
            .subscribe(
                user => this.response = JSON.stringify(user),
                error => console.log(error)
            );
    }
}
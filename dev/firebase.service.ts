import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import {last} from "rxjs/operator/last";
import 'rxjs/Rx';

@Injectable()
export class FirebaseService {

    constructor(private _http: Http) {}

    setUser(firstName: string, lastName: string) {
        const body = JSON.stringify({firstName: firstName, lastName: lastName});
        return this._http.put('https://vivid-heat-XXX.firebaseIO.com/user.json', body)
            .map(response => response.json());
    }

    getUser() {
        return this._http.get('https://vivid-heat-XXX.firebaseIO.com/user.json')
        .map(response => response.json());
    }
}
import {Component} from 'angular2/core';
import {ChildComponent} from "./child.component";

@Component({
    selector: 'app',
    template: `
        <div class="parent">
            <h1>Parent</h1>
            <p>Value entered in child component: {{childValue}}</p>
            <input type="text" #parentInput (keyup)="0"><br>
            <div class="child">
                <child [passedValue]="parentInput.value" (childChanged)="childValue = $event"></child>
            </div>
        </div>
    `,
    directives: [ChildComponent],
})
export class AppComponent {
    childValue: string;
}
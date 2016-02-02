import {Component, EventEmitter} from 'angular2/core';
import {Output} from "angular2/core";

@Component({
    selector: 'child',
    template: `
        <h2>Child</h2>
        <p>Value entered in parent component: {{parentValue}}</p>
        <input type="text" #childInput (keyup)="onChange(childInput.value)">
    `,
    inputs: ['parentValue:passedValue'],
})
export class ChildComponent {
    parentValue: string;
    @Output() childChanged = new EventEmitter<string>();

    onChange(value: string) {
        this.childChanged.emit(value);
    }
}
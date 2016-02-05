import {Component} from 'angular2/core';
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
    selector: 'my-app',
    template: `
        <section class="component">
            <my-component-1></my-component-1>
        </section>
        <section class="component">
            <my-component-2></my-component-2>
        </section>
    `,
    directives: [Component1Component, Component2Component]
})
export class AppComponent {

}

import { Component } from "@angular/core";

@Component({
    selector: 'first-app',
    template: `<h2>First Component</h2>
        <p>This is my First Component</p>`,
    styles: [`h2{color:red}
    p{color:navy; font-weight:bold;}`]
})

export class FirstComponent{

}
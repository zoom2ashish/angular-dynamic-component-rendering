import { Component, Input } from "@angular/core";
import { RotatingText } from "./rotating-text-component.interface";

@Component({
    selector: 'app-rotating-text-3',
    template: `<div style="color: blue">Rotating Text Message 3</div>`,
    standalone: true
})
export class RotatingText3Component  implements RotatingText {
    @Input() data: any;
}{
}
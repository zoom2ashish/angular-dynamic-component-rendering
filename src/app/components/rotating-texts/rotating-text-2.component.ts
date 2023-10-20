import { Component, Input } from "@angular/core";
import { RotatingText } from "./rotating-text-component.interface";

@Component({
    selector: 'app-rotating-text-2',
    template: `<div style="color: green">Rotating Text Message 2</div>`,
    standalone: true
})
export class RotatingText2Component implements RotatingText {
    @Input() data: any;
} {
}
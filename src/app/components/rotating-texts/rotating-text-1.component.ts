import { Component, Input } from "@angular/core";
import { RotatingText } from "./rotating-text-component.interface";

@Component({
    selector: 'app-rotating-text-1',
    template: `<div style="color: red">Rotating Text Message 1</div>`,
    standalone: true
})
export class RotatingText1Component implements RotatingText {
    @Input() data: any;
}
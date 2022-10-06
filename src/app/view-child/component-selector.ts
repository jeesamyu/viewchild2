import { Component, ViewChild } from "@angular/core";
import { TextBoxComponent } from "../text-box/text-box.component";

@Component({
    selector: 'app-ComponentSelector',
    template: `<app-text-box (buttonClick)="changeText()" [buttonText]="'Change <app-text-box> Text with ViewChild'"></app-text-box>`,
    styleUrls: []
})

export class ComponentSelector {

    @ViewChild(TextBoxComponent)
    textbox: TextBoxComponent = new TextBoxComponent;

    changeText() {
        this.textbox.innerText += 1;
        this.textbox.outerText -= 1;
    }
}

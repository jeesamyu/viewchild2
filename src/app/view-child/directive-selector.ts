import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { GradientDirective } from "../gradient-highlight/gradient.directive";

@Component({
    selector: 'app-DirectiveSelector',
    template: `  <h2 appGradient>click the button to change highlight color using gradient directive and view child</h2>
    <button (click)="changeHighlight()">change highlight</button> `,
    styles: ['h2{ text-align: center; padding:10px; }',
 'button{ min-width:60%; margin:0 20%; font-weight:bold; }']
})

export class DirectiveSelector implements AfterViewInit {

    @ViewChild(GradientDirective)
    textHighlight!:GradientDirective ;

    ngAfterViewInit(){
        this.textHighlight.highlight();
    }

    changeHighlight(){
        switch(this.textHighlight.rightcolor){
            case "red":
            this.textHighlight.rightcolor = "lightcoral";
            this.textHighlight.leftcolor = "lightpink";
            break;

            case "lightcoral":
            this.textHighlight.rightcolor = "blue";
            this.textHighlight.leftcolor = "red";
            break;
            default:
                this.textHighlight.rightcolor = "red";
                this.textHighlight.leftcolor = "green";
        }
        this.textHighlight.highlight();
    }

}

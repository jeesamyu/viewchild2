import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: 'app-TemplateReferenceVariableSelector',
    template: ` <h2 #sometext>change color using template reference and viewchild</h2>
    <h2 #colorname></h2>
    <button (click)="changestyle()">change background color</button>
     `,
    styleUrls: []
})

export class TemplateReferenceVariableSelector implements AfterViewInit {

    @ViewChild('sometext')text!: ElementRef;
    @ViewChild('colorname')colorname!:ElementRef;

    private bgcolor:string = "firebrick";

    constructor(private renderer : Renderer2){}

    ngAfterViewInit(): void {
    this.changecolor();
    }

    changestyle(){
        switch(this.bgcolor){
            case "firebrick" : this.bgcolor = "blue";
            break;
            case "blue":
            this.bgcolor="orange";
            break;
            case "orange":
                this.bgcolor = "yellow";
                break;
                case "yellow":
                    this.bgcolor = "firebrick";
                    break;
                        
        }
        this.changecolor();
    }
    changecolor(){
        this.renderer.setStyle(this.text.nativeElement , "background" , this.bgcolor);
        this.renderer.setProperty(this.colorname.nativeElement, "innerHTML" , this.bgcolor);
    }
}

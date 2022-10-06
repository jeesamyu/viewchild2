import { Component, ViewChild } from "@angular/core";
import { LoggerBoxComponent } from "../logger-box/logger-box.component";
import { LoggerService } from "../logger.service";

@Component({
    selector: 'app-class-token-provider-selector',
    template: `<h3>loggerservice as a provider in the loggerbox component , get this service using viewchild decorator</h3>
    <h4>check the console</h4><app-logger-box (buttonClick)="log($event)" [message]="message" [logTypes]=" ['success','info','warning','error'] " ></app-logger-box>`,
})

export class ClassTokenProviderSelector {

    @ViewChild(LoggerService) logger:LoggerService = new LoggerService;

    message!: string;

    log(logTypes :any){
        this.message = `${logTypes} 'message has been logged'`;

        switch(logTypes){
            case "warning":
                this.logger.emoji = "⚠️";
                this.logger.backgroundcolor = "goldenrod";
                break;
            case "info":
                this.logger.emoji = "ℹ️";
                this.logger.backgroundcolor = "steelblue";
                break;
            case "error":
                this.logger.emoji = "⛔️";
                this.logger.backgroundcolor = "firebrick";
                break;
            default:
                this.logger.emoji = "✅";
                this.logger.backgroundcolor = "green"

        }
    }

}

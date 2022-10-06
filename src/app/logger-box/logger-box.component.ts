import { Component, EventEmitter, InjectionToken, Input, Output } from '@angular/core';
import { LoggerService } from '../logger.service';

export const AnimalLoggerToken = new InjectionToken<string>("animallogger service");
@Component({
  selector: 'app-logger-box',
  templateUrl: './logger-box.component.html',
  styleUrls: ['./logger-box.component.css'],
  providers: [
    LoggerService,
    {provide : AnimalLoggerToken , useClass: LoggerService},
    {provide : "AnimalLoggerToken" , useClass: LoggerService}
  ]
})
export class LoggerBoxComponent{

  @Input()
  message!: string;
  @Input()
  logTypes!: string[];
  @Output() buttonClick = new EventEmitter<string>();
  
  performAction(logType :string){
this.buttonClick.emit(logType);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  emoji:string = "✅";
  backgroundcolor:string = "green";

  log(message :string){
    console.log(
      `%c ${this.emoji} ${message}`,
      `background-color : ${this.backgroundcolor}; padding:3px; color: white`
    )
  }

  constructor() { }
}

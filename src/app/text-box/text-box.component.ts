import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input()buttonText!: string;
  @Output()buttonClick = new EventEmitter()


  innerText= 1;
    outerText= 100;

    performFunction(){
      this.buttonClick.emit()
    }

  constructor() { }

  ngOnInit(): void {
  }

}

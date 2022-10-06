import { AfterViewInit, Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit,AfterViewInit {

  @ViewChild('hello',{ static: false })
  head!: ElementRef;

  @ViewChild('input') inputs!: ElementRef;

  @ViewChild('div') div!:ElementRef;

  // div set
  @ViewChild('div1') div1!: ElementRef;
  @ViewChild('div2') div2!: ElementRef;
  @ViewChild('div3') div3!: ElementRef;

  @ViewChild('logdiv') logdiv!: ElementRef;


  log='sdfdfsdsfd';


  login(){
// this.log = true;
this.text= 'online'
  }
  text='offline';


  constructor(private renderer : Renderer2, private element:ElementRef) {
    // this.renderer.setProperty( this.head.nativeElement, 'innerHTML', "renderer works" );
    
   }

  ngAfterViewInit(): void {
    const div= this.renderer.createElement('div');
    const text=this.renderer.createText('rendered in bottom');
    this.renderer.appendChild(div,text)
    this.renderer.appendChild(this.element.nativeElement,div)

  }

  change(){
    this.renderer.setStyle(this.head.nativeElement,'color','red');
    this.renderer.setProperty(this.head.nativeElement,'innerHTML',"content changed by setproperty");
    this.renderer.addClass(this.head.nativeElement,'blackborder');
    this.renderer.setAttribute(this.inputs.nativeElement,'value','samyu');
  }

  remove(){
    this.renderer.removeStyle(this.head.nativeElement,'color')
    this.renderer.removeClass(this.head.nativeElement,'blackborder')
    this.renderer.removeAttribute(this.inputs.nativeElement,'value')
    
    const div=this.renderer.createElement('div')
    const text=this.renderer.createText('override on the pre-created div element')

    this.renderer.appendChild(div,text)
    this.renderer.appendChild(this.div.nativeElement,div)
  }

  ngOnInit(): void {

  }
// div buttons
  beforediv1(){
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('This Text is Inserted before the div1');
    this.renderer.appendChild(div, text);
 
    this.renderer.insertBefore(this.element.nativeElement,div,this.div1.nativeElement);

  }

  beforediv2(){
    const div= this.renderer.createElement('div');
    const text = this.renderer.createText('inserted before the div 2');

    this.renderer.appendChild(div, text);
 
    this.renderer.insertBefore(this.element.nativeElement,div,this.div2.nativeElement);
  }

  beforediv3(){
    const div= this.renderer.createElement('div');
    const text = this.renderer.createText('inserted before the div 3');

    this.renderer.appendChild(div, text);
this.renderer.insertBefore( this.renderer.parentNode(this.div3.nativeElement),div,this.div3.nativeElement); 
  }

}

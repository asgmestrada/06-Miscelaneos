import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") nuevoColor: string;

  constructor(private elr : ElementRef)
  {
    console.log("Directiva llamada");
//    elr.nativeElement.style.backgroundColor = "yellow";
   }


    @HostListener('mouseenter') mouseEntro()
    {
      console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'blue');
    }


    @HostListener('mouseleave') mouseSalio()
    {
      this.resaltar(this.nuevoColor || 'black');

    }

    private resaltar(color: string)
    {
    this.elr.nativeElement.style.backgroundColor = color;
    }
}

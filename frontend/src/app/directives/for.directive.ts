import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
//implements é um ciclo de vida 
export class ForDirective implements OnInit{ 
  //usando o em que esta no myFor do html como marcado do que esta sendo passado, no caso um array
  @Input ('myForEm') numbers: number[]

  constructor(
    private container:ViewContainerRef, 
    private template: TemplateRef<any>) { 

  }

  ngOnInit(): void{
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, {$implicit : number})
    }
  }

}

import {
  Component,
  Input,
  ContentChild,
  ElementRef,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>
      <ng-content select="p"></ng-content><ng-content select="p"></ng-content
      ><ng-content></ng-content>
    </h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  @ContentChild("para", { read: ElementRef }) para: ElementRef;
  @ContentChild("span", { read: ViewContainerRef }) span: ViewContainerRef;

  ngAfterContentInit() {
    console.log(this.para.nativeElement.innerHTML);
    this.span.clear();
  }
}

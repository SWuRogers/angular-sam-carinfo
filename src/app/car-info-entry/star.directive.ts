import { Directive, TemplateRef, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { StarSpanComponent } from './star-span/star-span.component';

@Directive({
  selector: '[appStar]'
})
export class StarDirective implements AfterViewInit {

  constructor(
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef,
    private r: ComponentFactoryResolver
  ) { 
  }

  ngAfterViewInit(): void {
    this.viewContainer.createEmbeddedView(this.templateRef);
    const factory = this.r.resolveComponentFactory(StarSpanComponent);
    this.viewContainer.createComponent(factory);
  }
}

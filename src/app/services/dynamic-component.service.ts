import { ApplicationRef, ComponentFactoryResolver, Injectable, Renderer2, Type } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DynamicComponentService {

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private applicationRef: ApplicationRef) { }

    createComponent(componentType: Type<unknown>, componentData: any, elementToMount: HTMLElement, renderer2: Renderer2) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const componentRef = componentFactory.create(this.applicationRef.injector);

        // Attach component to the appRef so that it's inside the ng component tree and applies ChangeDetectionß
        this.applicationRef.attachView(componentRef.hostView);
        renderer2.appendChild(elementToMount, componentRef.location.nativeElement);
    }

}
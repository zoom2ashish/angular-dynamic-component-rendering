import { AfterViewInit, Component, OnDestroy, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { DynamicComponentService } from './services/dynamic-component.service';
import { ExampleComponent } from './components/example.component';
import { RotatingText1Component } from './components/rotating-texts/rotating-text-1.component';
import { RotatingText2Component } from './components/rotating-texts/rotating-text-2.component';
import { RotatingText3Component } from './components/rotating-texts/rotating-text-3.component';
import { RotatingText } from './components/rotating-texts/rotating-text-component.interface';

@Component({
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RotatingText1Component
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy{
  private currentRotatingText = -1;
  private rotatingTextTimer: VoidFunction | undefined;

  title = 'angular-dynamic-component-rendering';



  @ViewChild('rotatingText', { static: true, read: ViewContainerRef })
  rotatingText!: ViewContainerRef;

  constructor(private renderer2: Renderer2, private dynamicComponentSvc: DynamicComponentService) {}

  ngAfterViewInit(): void {
    const mountElement = document.getElementsByClassName('append-here');

    if (mountElement?.length > 0) {
      this.dynamicComponentSvc.createComponent(ExampleComponent, {}, mountElement[0] as HTMLElement, this.renderer2);
    }

    const interval = setInterval(() => {
      this.loadRotatingText();
    }, 2000);
    this.rotatingTextTimer = () => clearInterval(interval);
  }

  ngOnDestroy(): void {
    this.rotatingTextTimer?.();
  }

  loadRotatingText(): void {
      const rotatingTextComponents = [
        RotatingText1Component,
        RotatingText2Component,
        RotatingText3Component
      ];

      this.currentRotatingText = (this.currentRotatingText + 1) % rotatingTextComponents.length;
      const rotatingTextComp = rotatingTextComponents[this.currentRotatingText];

      this.rotatingText.clear();
      const compRef = this.rotatingText.createComponent<RotatingText>(rotatingTextComp);

      compRef.instance.data = {};
  }

}

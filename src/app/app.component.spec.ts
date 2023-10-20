import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome angular-dynamic-component-rendering'
    );
  });

  it(`should have as title 'angular-dynamic-component-rendering'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-dynamic-component-rendering');
  });
});

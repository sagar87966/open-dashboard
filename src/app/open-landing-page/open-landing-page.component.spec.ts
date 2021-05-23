import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenLandingPageComponent } from './open-landing-page.component';

describe('OpenLandingPageComponent', () => {
  let component: OpenLandingPageComponent;
  let fixture: ComponentFixture<OpenLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

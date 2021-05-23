import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBusinessContentComponent } from './open-business-content.component';

describe('OpenBusinessContentComponent', () => {
  let component: OpenBusinessContentComponent;
  let fixture: ComponentFixture<OpenBusinessContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenBusinessContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBusinessContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

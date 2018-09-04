import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsportiveComponent } from './formationsportive.component';

describe('FormationsportiveComponent', () => {
  let component: FormationsportiveComponent;
  let fixture: ComponentFixture<FormationsportiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsportiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsportiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

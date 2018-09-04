import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationinformatiqueComponent } from './formationinformatique.component';

describe('FormationinformatiqueComponent', () => {
  let component: FormationinformatiqueComponent;
  let fixture: ComponentFixture<FormationinformatiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationinformatiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationinformatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

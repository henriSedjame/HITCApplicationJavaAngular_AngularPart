import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationlinguistiqueComponent } from './formationlinguistique.component';

describe('FormationlinguistiqueComponent', () => {
  let component: FormationlinguistiqueComponent;
  let fixture: ComponentFixture<FormationlinguistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationlinguistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationlinguistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

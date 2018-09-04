import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationartistiqueComponent } from './formationartistique.component';

describe('FormationartistiqueComponent', () => {
  let component: FormationartistiqueComponent;
  let fixture: ComponentFixture<FormationartistiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationartistiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationartistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

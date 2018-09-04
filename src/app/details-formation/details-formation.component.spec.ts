import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormationComponent } from './details-formation.component';

describe('DetailsFormationComponent', () => {
  let component: DetailsFormationComponent;
  let fixture: ComponentFixture<DetailsFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

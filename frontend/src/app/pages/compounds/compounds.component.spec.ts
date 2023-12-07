import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundsComponent } from './compounds.component';

describe('CompoundsComponent', () => {
  let component: CompoundsComponent;
  let fixture: ComponentFixture<CompoundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundsComponent]
    });
    fixture = TestBed.createComponent(CompoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

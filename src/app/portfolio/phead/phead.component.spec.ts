import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PheadComponent } from './phead.component';

describe('PheadComponent', () => {
  let component: PheadComponent;
  let fixture: ComponentFixture<PheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

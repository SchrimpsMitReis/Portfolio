import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenzComponent } from './referenz.component';

describe('ReferenzComponent', () => {
  let component: ReferenzComponent;
  let fixture: ComponentFixture<ReferenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

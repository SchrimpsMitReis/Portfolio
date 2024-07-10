import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFrameComponent } from './info-frame.component';

describe('InfoFrameComponent', () => {
  let component: InfoFrameComponent;
  let fixture: ComponentFixture<InfoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

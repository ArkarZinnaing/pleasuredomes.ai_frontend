import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPersonDetailComponent } from './ai-person-detail.component';

describe('AiPersonDetailComponent', () => {
  let component: AiPersonDetailComponent;
  let fixture: ComponentFixture<AiPersonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiPersonDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

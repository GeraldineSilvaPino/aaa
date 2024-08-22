import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotofundComponent } from './notofund.component';

describe('NotofundComponent', () => {
  let component: NotofundComponent;
  let fixture: ComponentFixture<NotofundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotofundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotofundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

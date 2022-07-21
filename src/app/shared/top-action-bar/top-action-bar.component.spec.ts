import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopActionBarComponent } from './top-action-bar.component';

describe('TopActionBarComponent', () => {
  let component: TopActionBarComponent;
  let fixture: ComponentFixture<TopActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopActionBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

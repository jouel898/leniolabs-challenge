import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersCrudComponent } from './members-crud.component';

describe('MembersCrudComponent', () => {
  let component: MembersCrudComponent;
  let fixture: ComponentFixture<MembersCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

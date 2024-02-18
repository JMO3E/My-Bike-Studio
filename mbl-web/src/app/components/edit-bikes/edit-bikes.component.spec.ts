import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBikesComponent } from './edit-bikes.component';

describe('EditBikesComponent', () => {
  let component: EditBikesComponent;
  let fixture: ComponentFixture<EditBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

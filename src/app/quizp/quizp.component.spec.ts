import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizpComponent } from './quizp.component';

describe('QuizpComponent', () => {
  let component: QuizpComponent;
  let fixture: ComponentFixture<QuizpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

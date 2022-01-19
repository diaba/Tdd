import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponent } from './dog.component';

describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;
// foundation of the component
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//reading of a hunger level.
  it('allows to reading of hunger level', () => {
    expect(component.hungerLevel).toEqual(0);
  });

  it('allows to writing of hunger level', () => {
    component.hungerLevel = 5;
    expect(component.hungerLevel).toEqual(5)
  });

  // check hunger level if the dog eats
  describe('eat',()=>{
    describe('when dog is hungry',() => {
      it('decrements the hungerLevel', () =>{
        component.hungerLevel = 1;
        component.eat();
        expect(component.hungerLevel).toEqual(0);
    })
  })
  describe('when dog is not hungry', ()=>{
    it('does not decrement the hungerLevel', () =>{
      component.hungerLevel = 0;
      component.eat();
      expect(component.hungerLevel).toEqual(0);
  })
  }
  )
});
//Increased hungerLevel when exercise
describe('increase hungerLevel when invoke',()=>{
  it('increases the hungerLevel', ()=>{
    component.hungerLevel = 0;
    component.exercise();
    expect(component.hungerLevel).toEqual(1);
  })
})

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

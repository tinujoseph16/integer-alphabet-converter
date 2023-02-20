import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlphabetConverterComponent } from './alphabet-converter.component';

describe('AlphabetConverterComponent', () => {
  let component: AlphabetConverterComponent;
  let fixture: ComponentFixture<AlphabetConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//To verify the logs are printed correctly
  it('should log clicked value in browser logs', () => {
    //create a spy on console.log function to verify that its called
    spyOn(console, 'log');
    const fixture = TestBed.createComponent(AlphabetConverterComponent);
    fixture.detectChanges();
    //find the element of event triggered with value
    const valueElement = fixture.debugElement.query(By.css('.digits')); 
    valueElement.triggerEventHandler('click', null); 
    expect(console.log).toHaveBeenCalledWith(`You typed ${valueElement.nativeElement.value}`); 
  });

  
});

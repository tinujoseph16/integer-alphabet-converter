import { Component, OnInit } from '@angular/core';
import { AlphabetConverterService } from 'src/app/services/alphabet-converter.service';

@Component({
  selector: 'app-alphabet-converter',
  templateUrl: './alphabet-converter.component.html',
  styleUrls: ['./alphabet-converter.component.css']
})
export class AlphabetConverterComponent implements OnInit {
 
    integerValue: string = ''
    resultdata: string = ''

    constructor(private alphabetConverterService:AlphabetConverterService){}

    ngOnInit() {}

    //To display and get value on each click
    display(value: string) {
      //Function call to log the typed value in console
      this.alphabetConverterService.logValue(value);
      this.integerValue += value;
      this.convertToAlphabet(this.integerValue);
  }
  
  //Function call to convert integer to alphabet
  convertToAlphabet(integerValue:string) { 
    var output = this.alphabetConverterService.convertInteger(integerValue);
    this.resultdata = output;
    return this.resultdata;
  }
  //Function call to remove last entered character
  removeLastCharacter(integerValue:string) {
    var removeLastCharacter = this.alphabetConverterService.removeCharacter(integerValue);
    this.integerValue = removeLastCharacter;
    this.convertToAlphabet(removeLastCharacter);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlphabetConverterService {

  resultdata: string = '';
  constructor() { }
//Convert integer value to alphabets
  public convertInteger(integerValue : string){
    this.resultdata = "";
    var splittedNumber = integerValue.split('#');
    splittedNumber.forEach(element => {
      if(element == ""){
        return;
      }
      let conversionNumber = +element;
      var value1 = (conversionNumber % 26)+65;
      this.resultdata += String.fromCharCode(value1);
    });
    return this.resultdata;
  }
//To remove last character from the integer when click on back button
  public removeCharacter(integerValue : string){
    if (integerValue.length > 0) {
      this.resultdata = integerValue.slice(0, -1);
    }
    return this.resultdata;
  }

  //To print logs in the console
  public logValue(value: string): void {
    console.log(`You typed ${value}`);
  }
}

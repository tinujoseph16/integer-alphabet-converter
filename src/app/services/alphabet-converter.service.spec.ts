import { TestBed } from '@angular/core/testing';
import { AlphabetConverterComponent } from '../alphabet-converter/alphabet-converter/alphabet-converter.component';

import { AlphabetConverterService } from './alphabet-converter.service';

describe('AlphabetConverterService', () => {
  let service: AlphabetConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetConverterComponent], 
      providers: [AlphabetConverterService]
    });
    service = TestBed.inject(AlphabetConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Test cases to verify the integer to alphabet conversion
  it('should convert digit to alphabet', () => {
    const service = TestBed.inject(AlphabetConverterService);
  
    let result = service.convertInteger("0");
    expect(result).toEqual('A');

    result = service.convertInteger("01");
    expect(result).toEqual('B');

    result = service.convertInteger("01#0");
    expect(result).toEqual('BA');

    result = service.convertInteger("0#26");
    expect(result).toEqual('AA');

    result = service.convertInteger("#");
    expect(result).toEqual('');

    result = service.convertInteger("#1");
    expect(result).toEqual('B');

    result = service.convertInteger("45526#45527");
    expect(result).toEqual('AB');
  });

  //Test cases to verify last character removal
  it('should remove last character from input', () => {
    const service = TestBed.inject(AlphabetConverterService);
  
    let result = service.removeCharacter('1234');
    expect(result).toEqual('123');
  
    result = service.removeCharacter('56789');
    expect(result).toEqual('5678');
  
    result = service.removeCharacter(" ");
    expect(result).toEqual("");
  });
  
});

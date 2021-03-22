import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  public baseUrl: string = "http://139.59.42.229:8090/transporter";

  constructor() { }

  public addZeroes(num) {
    // Convert input string to a number and store as a variable.
    var value = Number(num);
    var result = String(value);
    // Split the input string into two arrays containing integers/decimals
    var res = result.split(".");
    // If there is no decimal point or only one decimal place found.
    if (res.length == 1 || res[1].length < 3) {
      // Set the number to two decimal places
      result = value.toFixed(2);
    }
    // Return updated or original number.
    return result;
  }
}

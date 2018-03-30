import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../models/entry';

@Pipe({
  name: "showness",
  pure: false
})

export class ShownessPipe implements PipeTransform {
  transform(input: Entry[], args)
  {
    var output: Entry[] = [];
    for (var i = 0; i < input.length; i++)
    {
      if(input[i].type === "Show")
      {
        output.push(input[i]);
      }
    }
    return output;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../models/entry';

@Pipe({
  name: "movieness",
  pure: false
})

export class MovienessPipe implements PipeTransform {
  transform(input: Entry[], args)
  {
    if(input != null)
    {
      var output: Entry[] = [];
      for (var i = 0; i < input.length; i++)
      {
        if(input[i].type === "Movie")
        {
          output.push(input[i]);
        }
      }
      return output;

    }
  }
}

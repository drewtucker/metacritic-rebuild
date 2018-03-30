import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../models/entry';

@Pipe({
  name: "albumness",
  pure: false
})

export class AlbumnessPipe implements PipeTransform {
  transform(input: Entry[], args)
  {
    var output: Entry[] = [];
    for (var i = 0; i < input.length; i++)
    {
      if(input[i].type === "Album")
      {
        output.push(input[i]);
      }
    }
    return output;
  }
}

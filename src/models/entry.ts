export class Entry
{
  constructor(public title: string, public creator: string, public type: string, public metascore: number, public releaseDate: string, public description: string){}
}

export class Movie extends Entry
{
  constructor(name, creator, metascore, releaseDate, description)
  {
    super(name, creator, "Movie", metascore, releaseDate, description)
  }
}

export class Game extends Entry
{
  constructor(name, creator, metascore, releaseDate, description)
  {
    super(name, creator, "Game", metascore, releaseDate, description)
  }
}

export class Album extends Entry
{
  constructor(name, creator, metascore, releaseDate, description)
  {
    super(name, creator, "Album", metascore, releaseDate, description)
  }
}

export class Show extends Entry
{
  constructor(name, creator, metascore, releaseDate, description)
  {
    super(name, creator, "Show", metascore, releaseDate, description)
  }
}

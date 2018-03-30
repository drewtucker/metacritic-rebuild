export class Entry
{
  constructor(public title: string, public creator: string, public type: string, public metascore: number, public releaseDate: string, public description: string, public image: string){}
}

export class Movie extends Entry
{
  constructor(name, creator, metascore, releaseDate, description, image)
  {
    super(name, creator, "Movie", metascore, releaseDate, description, image)
  }
}

export class Game extends Entry
{
  constructor(name, creator, metascore, releaseDate, description, image)
  {
    super(name, creator, "Game", metascore, releaseDate, description, image)
  }
}

export class Album extends Entry
{
  constructor(name, creator, metascore, releaseDate, description, image)
  {
    super(name, creator, "Album", metascore, releaseDate, description, image)
  }
}

export class Show extends Entry
{
  constructor(name, creator, metascore, releaseDate, description, image)
  {
    super(name, creator, "Show", metascore, releaseDate, description, image)
  }
}

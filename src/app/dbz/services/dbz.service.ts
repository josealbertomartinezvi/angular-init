import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'

import { Character, NewCharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuidv4(),
      name: 'krilin',
      power: 1000
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 8000
    }
  ];

  constructor() { }

  addCharacter(character: NewCharacter): void {

    const newCharacter: Character = {
      ...character,
      id: uuidv4(),
    }

    this.characters.push(newCharacter);

  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}

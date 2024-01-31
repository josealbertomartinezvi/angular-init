import { Component, EventEmitter, Output } from '@angular/core';

import { Character, NewCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-form',
  templateUrl: './dbz-character-form.component.html',
  styleUrl: './dbz-character-form.component.css',
})
export class DbzCharacterFormComponent {

  @Output()
  onNewCharacter: EventEmitter<NewCharacter> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  }

  saveCharacter() {

    if(!this.character.name) return;

    // debugger;

    this.onNewCharacter.emit({...this.character});

    this.character = {
      id: '',
      name: '',
      power: 0,
    }
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css',
})
export class DbzListComponent {

  @Input()
  public characters: Character[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter(id: string): void {
    // TODO: emit character index
    this.onDeleteCharacter.emit(id);
  }

}

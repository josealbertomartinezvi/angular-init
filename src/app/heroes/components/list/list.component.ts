import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = [ 'IronMan', 'Thor', 'Hulk', 'Spiderman'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}

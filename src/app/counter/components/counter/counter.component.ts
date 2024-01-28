import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  initialValue = 0;
  counter = this.initialValue;

  increseBy(value: number): void {
    this.counter += value;
  }

  reset() {
    this.counter = this.initialValue;
  }
}

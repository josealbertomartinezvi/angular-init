import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { NgFor, NgIf } from "@angular/common";

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
      HeroComponent,
      ListComponent
    ],
    imports: [
      NgIf,
      NgFor
    ],
})
export class HeroesModule {}

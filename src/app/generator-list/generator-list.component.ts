import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Generator } from "../generator.type";

@Component({
  selector: "app-generator-list",
  templateUrl: "./generator-list.component.html",
  styleUrls: ["./generator-list.component.scss", "../page.scss"],
})
export class GeneratorListComponent implements OnInit {
  constructor() {}

  @Output()
  selected = new EventEmitter<boolean>();
  @Input()
  generators: Generator[];

  ngOnInit(): void {}

  click(item) {
    this.selected.emit(item);
  }
}

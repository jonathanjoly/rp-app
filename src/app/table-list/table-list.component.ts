import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Table } from "../generator.type";

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.sass", "../page.scss"],
})
export class TableListComponent implements OnInit {
  constructor() {}

  @Input()
  tables: Table[];
  @Output()
  selected = new EventEmitter<Object>();
  ngOnInit(): void {
  }

  click(table) {
    this.selected.emit(table);
  }
}

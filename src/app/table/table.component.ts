import axios from "axios";
import { Component, OnInit } from "@angular/core";
import { Table } from "../generator.type";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import {
  SnackBarSaveComponent,
} from "../snack-bar-save/snack-bar-save.component";
import { SnackBarErrorComponent } from "../snack-bar-error/snack-bar-error.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { createNewTable, createNewEntry, createId } from "../generator";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss", "../page.scss"],
})
export class TableComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _snackBar: MatSnackBar,
  ) {}

  table: Table;

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get("id");

    if (!id) {
      this.table = createNewTable();
      return;
    }

    const result = await axios.get("http://localhost:4000/tables/" + id);
    this.table = result.data;
    this.table.entries = this.table.entries.sort((entryA, entryB) =>
      entryA.range.start - entryB.range.start
    );
  }

  remove(index) {
    this.table.entries.splice(index, 1)[0];
  }

  addTable(): void {
    this.table.entries.splice(0, 0, createNewEntry());
  }

  async save(): Promise<void> {
    if (this.table.id) {
      return this.put();
    }
    return this.post();
  }

  async put(): Promise<void> {
    const result = await axios.put(
      "http://localhost:4000/tables",
      {
        id: this.table.id,
        name: this.table.name,
        entries: this.table.entries,
      },
    );
    if (result.status === 200) {
      this.saved();
      return;
    }
    this.error();
  }

  async post(): Promise<void> {
    this.table.id = createId(this.table.name);
    const result = await axios.post(
      "http://localhost:4000/tables",
      {
        id: this.table.id,
        name: this.table.name,
        entries: this.table.entries,
      },
    );

    if (result.status === 200) {
      this.saved();
      this.location.go("table/" + this.table.id);
      return;
    }
    this.error();
  }

  saved() {
    this._snackBar.openFromComponent(SnackBarSaveComponent, {
      duration: 3000,
    });
  }

  error() {
    this._snackBar.openFromComponent(SnackBarErrorComponent, {
      duration: 3000,
    });
  }
  newTable() {
    this.table = createNewTable();
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import axios from "axios";
import { createNewGenerator, tablesToIdArray, createId } from "../generator";
import { Generator } from "../generator.type";
import { GeneratorDialogComponent } from "../generator-dialog/generator-dialog.component";
import {
  SnackBarSaveComponent,
} from "../snack-bar-save/snack-bar-save.component";
import { SnackBarErrorComponent } from "../snack-bar-error/snack-bar-error.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-generator",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.scss", "../page.scss"],
})
export class GeneratorComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {}

  generator: Generator;

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get("id");

    if (!id) {
      this.generator = createNewGenerator();
      return;
    }

    const result = await axios.get("http://localhost:4000/generators/" + id);
    this.generator = result.data;
  }

  goDown(index: number): void {
    const item = this.generator.tables.splice(index, 1)[0];
    this.generator.tables.splice(index + 1, 0, item);
  }

  goUp(index) {
    const item = this.generator.tables.splice(index, 1)[0];
    this.generator.tables.splice(index - 1, 0, item);
  }

  remove(index) {
    this.generator.tables.splice(index, 1)[0];
  }

  addTable(): void {
    const dialogRef = this.dialog.open(GeneratorDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.generator.tables.push(result);
    });
  }

  async save(): Promise<void> {
    if (this.generator.id) {
      return this.put();
    }
    return this.post();
  }

  async put(): Promise<void> {
    const result = await axios.put(
      "http://localhost:4000/generators",
      {
        id: this.generator.id,
        name: this.generator.name,
        tables: tablesToIdArray(this.generator.tables),
      },
    );
    if (result.status === 200) {
      this.saved();
      return;
    }
    this.error();
  }

  async post(): Promise<void> {
    this.generator.id = createId(this.generator.name);
    const result = await axios.post(
      "http://localhost:4000/generators",
      {
        id: this.generator.id,
        name: this.generator.name,
        tables: tablesToIdArray(this.generator.tables),
      },
    );

    if (result.status === 200) {
      this.saved();
      this.location.go("generator/" + this.generator.id);
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
}

import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import axios from "axios";

@Component({
  selector: "app-generator-dialog",
  templateUrl: "./generator-dialog.component.html",
  styleUrls: ["./generator-dialog.component.scss", "../page.scss"],
})
export class GeneratorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GeneratorDialogComponent>,
  ) {}

  tables = [];

  async ngOnInit(): Promise<void> {
    const res = await axios.get("http://localhost:4000/tables");
    this.tables = res.data;
  }

  onSelected(item) {
    this.dialogRef.close(item);
  }
}

import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import axios from "axios";
import { GeneratorsService } from '../generators.service';

@Component({
  selector: "app-generator-dialog",
  templateUrl: "./generator-dialog.component.html",
  styleUrls: ["./generator-dialog.component.scss", "../page.scss"],
})
export class GeneratorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GeneratorDialogComponent>,
    private api: GeneratorsService
  ) {}

  tables = []; 

  async ngOnInit(): Promise<void> { 
    this.api.getGenerators().subscribe((generator)=> {
      this.tables = generator;
    });
  }

  onSelected(item) {
    this.dialogRef.close(item);
  }
}

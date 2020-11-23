import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { TablesService } from '../tables.service';

@Component({
  selector: "app-generator-dialog",
  templateUrl: "./generator-dialog.component.html",
  styleUrls: ["./generator-dialog.component.scss", "../page.scss"],
})
export class GeneratorDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GeneratorDialogComponent>,
    private api: TablesService
  ) {}

  tables = []; 

  async ngOnInit(): Promise<void> { 
    this.api.getTables().subscribe((tables)=> {
      this.tables = tables;
    });
  }

  onSelected(item) {
    this.dialogRef.close(item);
  }
}

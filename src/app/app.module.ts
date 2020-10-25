import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./menu/menu.component";
import { MaterialModule } from "../material-module";
import { GeneratorListComponent } from "./generator-list/generator-list.component";
import { GeneratorComponent } from "./generator/generator.component";
import { GenerateComponent } from "./generate/generate.component";
import { GeneratorsComponent } from "./generators/generators.component";
import { GeneratorDialogComponent } from './generator-dialog/generator-dialog.component';
import { TablesComponent } from './tables/tables.component';
import { TableListComponent } from './table-list/table-list.component';
import { SnackBarSaveComponent } from './snack-bar-save/snack-bar-save.component';
import { SnackBarErrorComponent } from './snack-bar-error/snack-bar-error.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GeneratorListComponent,
    GeneratorComponent,
    GenerateComponent,
    GeneratorsComponent,
    GeneratorDialogComponent,
    TablesComponent,
    TableListComponent,
    SnackBarSaveComponent,
    SnackBarErrorComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

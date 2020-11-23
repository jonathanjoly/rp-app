import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GeneratorComponent } from "./generator/generator.component";
import { GeneratorsComponent } from "./generators/generators.component";
import { GenerateComponent } from "./generate/generate.component";
import { TablesComponent } from "./tables/tables.component";
import { TableComponent } from "./table/table.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "generators", component: GeneratorsComponent },
  { path: "generator", component: GeneratorComponent },
  { path: "generator/:id", component: GeneratorComponent },
  { path: "generate/:id", component: GenerateComponent },
  { path: "tables", component: TablesComponent },
  { path: "table", component: TableComponent },
  { path: "table/:id", component: TableComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

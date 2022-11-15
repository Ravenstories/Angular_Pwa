import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';

const routes: Routes = [
  {path: "table", component: TableComponent},
  {path: "upload", component: UploadImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

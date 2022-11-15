import { Component, Inject, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TableElement } from 'src/app/interfaces/table-element';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

const ELEMENT_DATA: TableElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<TableElement>();
  
  constructor(private dialog: MatDialog) { }

  clickedRow(row: TableElement): void{
    this.dialog.open(DialogComponent, {
        data: row
    });
  }

  ngOnInit(): void {
  }
}
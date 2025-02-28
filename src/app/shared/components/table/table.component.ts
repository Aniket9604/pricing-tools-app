import { Component,signal, input, effect, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, } from '@angular/material/paginator';
import { MatSortModule, } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {
  pageSize =signal(5); // Pagination  
  columns =input<{ key: string; title: string }[]>([]);
  data=input<T[]>([])
  rowClick = output<T>();  
  displayedColumns = signal<string[]>([]);

  
  constructor() {
    effect(() => {
      this.displayedColumns.set(this.columns().map(col => col.key));
      console.log("Updated displayedColumns:", this.displayedColumns());
    });
  } 
 

  onRowClick(row: T) {
    this.rowClick.emit(row);
  }

 
}

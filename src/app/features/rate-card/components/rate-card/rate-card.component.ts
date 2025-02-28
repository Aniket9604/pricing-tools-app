import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../authentication/services/auth.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { FileUploadComponent } from "../../../file-upload/components/file-upload/file-upload.component";

@Component({
  selector: 'app-rate-card',
  imports: [MatButtonModule, TableComponent, FileUploadComponent],
  templateUrl: './rate-card.component.html',
  styleUrl: './rate-card.component.scss'
})
export class RateCardComponent {

  router = inject(Router);
  authService = inject(AuthService);

  viewDetails() {
    this.router.navigate(['/rate-card/details']);
  }

  logOut() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  userData = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ];
  
  tableColumns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' }
  ];
  
  onRowSelected(row: any) {
    console.log('Selected row:', row);
  }
  

}

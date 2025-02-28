import { Component } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  imports: [
    CommonModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadProgress = 0;

  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      alert('Please select a file first!');
      return;
    }

    console.log('Uploading file:', this.selectedFile); 

    this.fileUploadService.uploadFile(this.selectedFile).subscribe((event: any) => {
      if (event.type === 1 && event.loaded && event.total) {
        this.uploadProgress = Math.round((100 * event.loaded) / event.total);
      }
    });
  }
}

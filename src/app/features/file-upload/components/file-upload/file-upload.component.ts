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

  

  constructor(public fileUploadService: FileUploadService) {}

 

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.fileUploadService.errorMessage.set('Please select a file first.');
      return;
    }

    this.fileUploadService.uploadFile(this.selectedFile);
  }

  // Read signals from the service

  get progress (): number {
    return this.fileUploadService.progress();
  }

  get isUploading (): boolean {
    return this.fileUploadService.isUploading();
  }

  get errorMessage (): string | null {
    return this.fileUploadService.errorMessage();
  }
  
}

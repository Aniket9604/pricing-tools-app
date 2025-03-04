import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  // private apiUrl = 'http://localhost:3000/upload'; // Change to your backend URL
  private apiUrl = 'http://192.168.0.149:3000/upload_chunk'; // mohnish IP address
  private readonly chunkSize = 20 * 1024 * 1024; 

  // Signal to track upload progress
  progress = signal<number>(0);
  isUploading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);

  constructor(private http: HttpClient) {}
  async uploadFile(file: File): Promise<void> {
    this.progress.set(0);
    this.isUploading.set(true);
    this.errorMessage.set(null);

    const totalChunks = Math.ceil(file.size / this.chunkSize);
    let uploadedChunks = 0;
    console.time('Chunks upload time');  // Log start time of chunk upload
    for (let i = 0; i < totalChunks; i++) {
      const start = i * this.chunkSize;
      const chunk = file.slice(start, start + this.chunkSize);

      try {
        console.log(`Sending chunk ${i + 1}/${totalChunks}...`,chunk);  
        await this.uploadChunk(chunk, i + 1, totalChunks);
        uploadedChunks++;

        // Calculate Progress
        const overallProgress = Math.round((uploadedChunks / totalChunks) * 100);
        this.progress.set(overallProgress);

        // Wait 1 second before sending the next chunk
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        this.errorMessage.set('Error uploading file. Please try again.');
        console.error('Chunk upload failed:', error);
        this.isUploading.set(false);
        return;
      }
    }

    console.log('Upload completed');
    console.timeEnd('Chunks upload time'); 
    this.isUploading.set(false);
  }

  private async uploadChunk(chunk: Blob, chunkNumber: number, totalChunks: number): Promise<void> {
    const formData = new FormData();
    formData.append('file', chunk);
    formData.append('chunk_number', chunkNumber.toString());
    formData.append('total_chunks', totalChunks.toString());
    console.log(`Chunk ${chunkNumber}/${totalChunks}.`,this.apiUrl);

    await this.http.post(`${this.apiUrl}`, formData, {
      reportProgress: true,
      observe: 'events',
    }).toPromise();
    
    console.log(`Chunk ${chunkNumber}/${totalChunks} uploaded successfully.`);
  }

}

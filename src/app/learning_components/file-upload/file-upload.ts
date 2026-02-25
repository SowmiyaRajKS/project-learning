import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.scss',
})
export class FileUpload {
  uploadedFileName = signal("");
  http = inject(HttpClient);
  onFileUpload(event: any) {
    console.log('event.   :',event);
    const formData = new FormData();
    formData.append('file',event.target.files[0]);
    this.http.post("https://storeapi.gerasim.in/api/Customer/Upload", formData).subscribe({
      next: (fileName: any)=>{
        this.uploadedFileName.set('https://storeapi.gerasim.in/customer/'+fileName)
      },
      error: (error: any)=> {
        console.log(error);
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    constructor(private http: HttpClient) { }

    uploadWavFile(wavFile: Blob): Promise<any> {
        const formData = new FormData();
        formData.append('file', wavFile, 'audio.wav');

        return this.http.post<any>('https://example.com/upload', formData).toPromise();
    }
}

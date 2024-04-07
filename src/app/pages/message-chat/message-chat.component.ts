import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AiPerson } from '../../classes/ai-person.class';
import { SharedService } from '../../share/shared.service';
import { environment } from '../../../environments/environment';
import { FileUploadService } from '../../services/file-upload.service';


@Component({
  selector: 'app-message-chat',
  templateUrl: './message-chat.component.html',
  styleUrl: './message-chat.component.scss'
})
export class MessageChatComponent {
  aiPerson = new AiPerson()
  env = environment
  message: string = ''
  isTyping: boolean = false
  rec: boolean = false


  mediaRecorder!: MediaRecorder;
  chunks: Blob[] = [];
  isRecording = false;

  @ViewChild('inputField')
  inputField!: ElementRef;



  chatHistory: any = [
    {
      user: '001',
      message: 'Hello, I am AI'
    },
    {
      user: '',
      message: 'Hello, I am Human'
    },
    {
      user: '001',
      message: 'What are you doing?'
    },

    {
      user: '',
      message: 'Human is fine'
    },
  ]


  constructor(
    private shareService: SharedService,
    private renderer: Renderer2,
    private fileUploadService: FileUploadService
  ) {
    this.aiPerson = {
      id: '1',
      name: "Sarah",
      image: "https://img.freepik.com/premium-photo/asian-girls-education-happy-beautiful-asian-girl-is-smilling_911620-8519.jpg",
      dob: "March 27, 2000 (Age 24)",
      gender: "Female",
      location: "Thailand",
      description: "Sarah, a vibrant young woman with a passion for exploring the outdoors and immersing herself in creative pursuits. On weekends, you'll often find her hiking through scenic trails, camera in hand, capturing the beauty of nature. Sarah is an avid reader and enjoys getting lost in the pages of a good book, especially mysteries and historical fiction. She also has a keen interest in painting and spends hours in her cozy art corner, bringing her imagination to life on canvas. Additionally, Sarah is a food enthusiast who loves experimenting with new recipes in the kitchen, often hosting dinner parties for friends and family to showcase her culinary creations. Whether she's embarking on an adventure in the great outdoors or unleashing her creativity through art and cooking, Sarah is always up for new experiences and delights in sharing her passions with those around her."
    }


  }


  ngAfterViewInit(): void {
    // Focus on the input field after view initialization
    this.renderer.selectRootElement(this.inputField.nativeElement).focus();
  }


  sendMessage() {
    this.isTyping = true
    if (this.message.trim() !== '') {
      this.chatHistory.push({ user: '', message: this.message })
      console.log(this.chatHistory, 'chat history')
      this.message = '';
    }
  }

  recordVoice() {
    this.rec = !this.rec;
    if (this.rec) {
      this.startRecording();
    } else {
      this.stopRecording();
    }
  }


  // record voice
  async startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = (event) => {
        this.chunks.push(event.data);
      };
      this.mediaRecorder.start();
      this.isRecording = true;
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.isRecording = false;
      this.saveRecording();
    }
  }


  saveRecording() {
    const audioBlob = new Blob(this.chunks, { type: 'audio/wav' });
    console.log(audioBlob, 'record')
    this.uploadWavFile(audioBlob)
  }


  // upload wav
  async uploadWavFile(wavFile: Blob) {
    try {
      await this.fileUploadService.uploadWavFile(wavFile);
      console.log('WAV file uploaded successfully');
    } catch (error) {
      console.error('Error uploading WAV file:', error);
    }
  }



}

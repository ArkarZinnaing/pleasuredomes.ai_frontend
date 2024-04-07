import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../share/shared.service';
import { AiPerson } from '../../classes/ai-person.class';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-ai-person-detail',
  templateUrl: './ai-person-detail.component.html',
  styleUrl: './ai-person-detail.component.scss'
})
export class AiPersonDetailComponent implements OnInit {

  aiPerson = new AiPerson()
  env = environment

  constructor(
    private shareService: SharedService,
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

  ngOnInit(): void {
    this.aiPerson.image = this.shareService.aiPerson.image
  }

  startChat() {
    this.shareService.router.navigate(['message-chat', this.aiPerson.id])
  }



}

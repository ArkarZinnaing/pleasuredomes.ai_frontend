import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageChatComponent } from './pages/message-chat/message-chat.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { AiPersonDetailComponent } from './pages/ai-person-detail/ai-person-detail.component';
import { DetailInfoComponent } from './pages/detail-info/detail-info.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'message-chat/:id',
    component: MessageChatComponent
  },
  {
    path: 'personal-info',
    component: PersonalInfoComponent
  },
  {
    path: 'detail-info',
    component: DetailInfoComponent
  },
  {
    path: 'person-detail/:id',
    component: AiPersonDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

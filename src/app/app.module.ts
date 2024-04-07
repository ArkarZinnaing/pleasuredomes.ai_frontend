import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './share/httpconfig.interceptor';
import { MessageChatComponent } from './pages/message-chat/message-chat.component';
import { HeaderComponent } from './elements/header/header.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { DetailInfoComponent } from './pages/detail-info/detail-info.component';
import { AiPersonDetailComponent } from './pages/ai-person-detail/ai-person-detail.component';
import { FooterComponent } from './elements/footer/footer.component'
import { NgxLoadingModule } from "ngx-loading";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './elements/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageChatComponent,
    HeaderComponent,
    PersonalInfoComponent,
    DetailInfoComponent,
    AiPersonDetailComponent,
    FooterComponent,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    ToastrModule.forRoot({
      timeOut: 10000,
    }),
    NgxLoadingModule.forRoot({}),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RepoComponent } from './repo/repo.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NgProgress, NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { UnderlineDirective } from './underline.directive';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    NavbarComponent,
    RepoComponent,
    SearchFormComponent,
    UnderlineDirective,
    DatePipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

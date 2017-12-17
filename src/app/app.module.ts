import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './student/list/list.component';
import { DetailComponent } from './student/detail/detail.component';
import { AppService } from './app.service';
import { ViewComponent } from './student/view/view.component';
import { StudentComponent } from './student/student.component';
import { appRoutes } from './app-routing.module';
import { WikiComponent } from './wiki/wiki.component';
import { WikiService } from './wiki/wiki.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ListComponent,
    DetailComponent,
    ViewComponent,
    StudentComponent,
    WikiComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AppService,
    WikiService
  ]
})
export class AppModule { }

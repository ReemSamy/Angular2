// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DisplayComponent } from './display/display.component';
import { DepartmentModule } from './department/department.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DepartmentModule, // add DepartmentModule here
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AutoSuggestionComponent } from './auto-suggestion/auto-suggestion.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule],
  exports: [],
  declarations: [AppComponent, HelloComponent, AutoSuggestionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

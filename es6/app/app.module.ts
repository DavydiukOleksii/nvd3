import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';

import { DataService } from './share/data.service';

@NgModule({
    imports: [BrowserModule, NvD3Module, HttpModule],
    declarations: [AppComponent],
    exports: [],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {}
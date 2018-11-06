import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreRoutingModule } from './core-routes.module';
import { CoreComponent } from './core.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        CoreComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        CoreRoutingModule,
        MatIconModule
    ],
    exports: [],
    providers: [],
    bootstrap: [CoreComponent]
})
export class CoreModule { }

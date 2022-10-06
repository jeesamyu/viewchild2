import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerBoxComponent } from './logger-box/logger-box.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ProviderChildComponent } from './provider-child/provider-child.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { GradientDirective } from './gradient-highlight/gradient.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentSelector } from './view-child/component-selector';
import { DirectiveSelector } from './view-child/directive-selector';
import { readPropertyViewChild } from './view-child/read-property-view-child.component';
import { StaticPropertyViewChild } from './view-child/static-property-view-child';
import { StringTokenProviderSelector } from './view-child/string-token-provider-selector';
import { TemplateReferenceVariableSelector } from './view-child/template-reference-variable-selector';
import { TemplateRefSelector } from './view-child/template-ref-selector';
import { ClassTokenProviderSelector } from './view-child/class-token-provider-selector';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerBoxComponent,
    MessageBoxComponent,
    ProviderChildComponent,
    TextBoxComponent,
    ViewChildrenComponent,
    GradientDirective,
    ComponentSelector,
    DirectiveSelector,
    readPropertyViewChild,
    StaticPropertyViewChild,
    StringTokenProviderSelector,
    TemplateReferenceVariableSelector,
    TemplateRefSelector,
    ClassTokenProviderSelector,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

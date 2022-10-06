import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoggerBoxComponent } from './logger-box/logger-box.component';
import { LoginComponent } from './login/login.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ProviderChildComponent } from './provider-child/provider-child.component'
import { TextBoxComponent } from './text-box/text-box.component';
import { ClassTokenProviderSelector } from './view-child/class-token-provider-selector';
import { ComponentSelector } from './view-child/component-selector';
import { DirectiveSelector } from './view-child/directive-selector';
import { readPropertyViewChild } from './view-child/read-property-view-child.component';
import { StaticPropertyViewChild } from './view-child/static-property-view-child';
import { StringTokenProviderSelector } from './view-child/string-token-provider-selector';
import { TemplateRefSelector } from './view-child/template-ref-selector';
import { TemplateReferenceVariableSelector } from './view-child/template-reference-variable-selector';
import { ViewChildrenComponent } from './view-children/view-children.component';

const routes: Routes = [
  { path: '' , redirectTo: 'login' , pathMatch: 'full'},

  { path: 'login' ,component : LoginComponent},

  { path : 'home' , component : HomeComponent , children : [{ path: 'app-logger-box', component: LoggerBoxComponent },

  { path: 'app-message-box', component: MessageBoxComponent },

  { path: 'app-provider-child', component: ProviderChildComponent },

  { path: 'app-text-box', component: TextBoxComponent },

  { path: 'component-selector', component: ComponentSelector },

  { path: 'directive-selector', component: DirectiveSelector },

  { path: 'read-property-view-child', component: readPropertyViewChild },

  { path: 'static-property-view-child', component: StaticPropertyViewChild },

  { path: 'string-token-provider-selector', component: StringTokenProviderSelector },

  { path: 'template-ref-selector', component: TemplateRefSelector },

  { path: 'template-reference-variable-selector', component: TemplateReferenceVariableSelector },
  
  { path: 'view-children-component', component: ViewChildrenComponent },

  { path: 'class-token-providor-selector', component: ClassTokenProviderSelector}]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

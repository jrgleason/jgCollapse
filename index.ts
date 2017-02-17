import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollapseAreaDirective} from './src/collapse-area.directive';
import {CollapseDirective} from './src/collapse.directive';
import {CollapseService} from './src/collapse.service';

export * from './src/collapse.service';
export * from './src/collapse.directive';
export * from './src/collapse-area.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapseDirective,
    CollapseAreaDirective,
  ],
  exports: [
    CollapseDirective,
    CollapseAreaDirective,
  ]
})
export class CollapseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CollapseModule,
      providers: [CollapseService]
    };
  }
}

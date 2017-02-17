import {CollapseDirective } from "../../../../src/ng2/core/collapse/collapse.directive";
import { ElementRef } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import {CollapseAreaDirective} from "./collapse-area.directive";
import {CollapseService} from "./collapse.service";
class MockElementRef extends ElementRef {
    nativeElement = { };
}
describe("Collapse Directive", () => {
  let collapseDirective: CollapseDirective;
  let elementRef: ElementRef;
  let collapseService: CollapseService = new CollapseService();
  beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [
              { provide: ElementRef, useClass: MockElementRef },
          ],
      }).compileComponents();
      elementRef = TestBed.get(ElementRef);
      collapseDirective = new CollapseDirective(collapseService);
  });
  describe("Collapse Area Directive", () => {
      let cad: CollapseAreaDirective;
      beforeEach( () => {
          cad = new CollapseAreaDirective(collapseService);
          cad.ngOnInit();
      });
      it("After toggle the height and isOpen should change", () => {
          expect(cad.currentHeight).toBe("0");
          expect(cad.opened).toBeFalsy();
          collapseDirective.toggle();
          expect(cad.currentHeight).toBe("");
          expect(cad.opened).toBeTruthy();
          collapseDirective.toggle();
          expect(cad.currentHeight).toBe("0");
          expect(cad.opened).toBeFalsy();
      });
  });
});

import {
    HostBinding,
    Directive,
    HostListener,
    Input,
} from "@angular/core";
import {CollapseService} from "./collapse.service";
@Directive({
    selector: "[jgCollapse]",
})
export class CollapseDirective {
    @Input() childName: string = "unknown";

    get expanded(){
        return this.isExpanded;
    }

    @HostBinding("class.expanded")
    private isExpanded: boolean = false;

    // TODO: I really hate doing it like this but I have to till I can figure out a better way
    @HostBinding('style.position')
    private readonly POSITION = "relative";

    constructor(private collapseService: CollapseService) { }
    @HostListener("click")
    toggle() {
        this.collapseService.process(this.childName);
    }
}

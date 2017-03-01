import {
    HostBinding,
    Directive,
    EventEmitter,
    Input,
    Output,
    OnInit,
} from "@angular/core";
import {CollapseService} from "./collapse.service";

@Directive({
    selector: "[jgCollapseArea]",
})
export class CollapseAreaDirective implements OnInit {
    @Input() areaName: string = "unknown";
    // TODO: Should be enum and should be implemented so it can be used
    isOpen: boolean = false;
    @Output() onToggle: EventEmitter<any> = new EventEmitter();
    emitter: EventEmitter<any>;

    @HostBinding('style.overflow')
    private readonly OVERFLOW = "hidden";
    @HostBinding('style.height')
    private height: string = "0";
    @HostBinding('style.width')
    private width: string = "0";
    @HostBinding('style.min-width')
    private minWidth: string = "0";
    @HostBinding('style.min-height')
    private minHeight: string = "0";



    get currentHeight(){
        return this.height;
    }

    get opened(){
        return this.isOpen;
    }

    constructor(private service: CollapseService) {
        if (!this.emitter) {
            this.emitter = new EventEmitter();
        }
        this.emitter.subscribe((message: any) => this.toggle(message.state));
    }
    ngOnInit() {
        this.service.addChild(this.areaName, this.emitter);
    }
    private toggle = (state: any) => {
        if (
            (state == null && this.isOpen) ||
            (this.isOpen && !state)
        ) {
            this.close();
        }
        else if (
            (state == null && !this.isOpen) ||
            (state && !this.isOpen)
        ) {
            this.open();
        }
        else {
            // TODO: Should be in the same state
        }
    }
    private close = () => {
        this.height = "0";
        this.width = "0";
        this.minWidth = "0";
        this.minHeight = "0";
        this.isOpen = false;
        this.onToggle.emit(false);
    }
    private open = () => {
        this.height = "";
        this.width = "";
        this.minWidth = "";
        this.minHeight = "";
        this.isOpen = true;
        this.onToggle.emit(true);
    }
}
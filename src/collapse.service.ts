import {Injectable, EventEmitter} from "@angular/core";
@Injectable()
export class CollapseService {
    newChild: EventEmitter<any> = new EventEmitter();
    // TODO: Close when you click somewhere else or when you press escape
    private _children: Map<string, EventEmitter<any>> = new Map<string, EventEmitter<any>>();
    getChild = (name: string) => {
        return this._children.get(name);
    }
    addChild = (name: string, emitter: EventEmitter<any>) => {
        this._children.set(name, emitter);
        this.newChild.emit(name);
    }
    process = (name: string, state?: boolean) => {
        let child = this._children.get(name);
        if (child) {
            child.next({
                state: state,
            });
        }
    }
}
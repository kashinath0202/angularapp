import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    template: `<h1> This is my server component</h1>
    <h1 class="test1" id="test1">This is h2</h1>
    {{name}}`,
    styleUrls: ['./server.component.css']
})
export class ServerComponent{

   name: string = 'Codemind';
}

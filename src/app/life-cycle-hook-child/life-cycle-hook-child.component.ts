import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild,
         DoCheck, ElementRef, Input,OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-child',
  templateUrl: './life-cycle-hook-child.component.html',
  styleUrls: ['./life-cycle-hook-child.component.css']
})
export class LifeCycleHookChildComponent implements OnInit, OnChanges , DoCheck , 
AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked{

  @Input() parentData:string;  // Using Input Decorator  (Binding of Parent component)

  @ContentChild('layout', {static:false}) contentParentData:ElementRef;   // Ref. Variable selected From Parent Component (layout)
  @ViewChild('childData',{static:false}) contentChildData:ElementRef;    // Ref. Variable selected From Child Component (childData)

  constructor() {
    // Called By 1st Number
     console.log('constructor Called');
     
   }
  ngAfterViewChecked(): void {
    // Called By 8th Number & every time when change Detection 
    console.log('ngAfterViewChecked Called');
    this.contentChildData.nativeElement.setAttribute('style',`color:${this.parentData}`)  // Dynamically Color Set
  }
  ngAfterViewInit(): void {
     // Called By 7th Number
    console.log('ngAfterViewInit Called');
    // this.contentChildData.nativeElement.setAttribute('style','color:red');                // Hard Coded Color Set
    // this.contentChildData.nativeElement.setAttribute('style',`color:${this.parentData}`) // Dynamically Not Working
  }
  ngAfterContentChecked(): void {
    // Called By 6th Number & every time when change Detection 
    console.log('ngAfterContentChecked Called');
    this.contentParentData.nativeElement.setAttribute('style',`color:${this.parentData}`);  // Dynamically Color Set
  }
  
  ngAfterContentInit(): void {
    // Called By 5th Number
   console.log('ngAfterContentInit Called');
  //  this.contentParentData.nativeElement.setAttribute('style','color:red');                 // Hard Coded Color Set
   // this.contentParentData.nativeElement.setAttribute('style',`color:${this.parentData}`);  // Dynamically Not Working
  }

  ngDoCheck(): void {
     // Called By 4th Number & every time when change Detection 
    console.log('ngDoCheck Called');
  }

  ngOnInit() {
    // Called By 3rd Number
    console.log('ngOnInit Called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called By 2nd Number & every time when change Detection 
    console.log('ngOnChanges Called');
  }

}

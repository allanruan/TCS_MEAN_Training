import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num:number =1000;
  constructor(){
    console.log(`Constructor invoked. Number(constructor) is ${this.num}`)

  }

  ngOnInit(){
    console.log(`ngOnInit Invoked..Number(constructor) is ${this.num}`)
  }

  ngOnChange(){
    console.log(`ngOnChange has been invoked Number(constructor) is ${this.num}`)
  }

  ngDoCheck(){
    console.log(`ngDoCheck invoked .. Number(constructor) is ${this.num}`)
  }

  // Note: ngDoCheck and ngDoChanges should not be implemented together
  // on name component
  // http://www.formationstone.com/#about - single page
  // https://www.sw.co.uk/why-sw/ - multipage
  // https://jeos.zupshop.in/home1#testimonial - one-page

 ngAfterContentInit(){
   console.log('ngAfterContentInit Invoked..')
 }

 ngAfterContentChecked(){
   console.log('ngAfterContentChecked Invoked')
 }

 ngAfterViewInit(){
   console.log('ngAfterViewInit Invoked')
 }
 ngAfterViewChecked(){
   console.log('ngAfterViewChecked..')
 }

 ngDoOnDestroy(){
   console.log('ngDoDestroy Invoked..')
  }


  incrementNumber():void{
    this.num += 100;
  }
  decrementNumber():void{
    this.num -= 100;
  }
}

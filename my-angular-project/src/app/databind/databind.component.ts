import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.scss']
})
export class DatabindComponent {
  dynName: string = "Prashant";
  myStyle: string = "15px";
  mltClasses = {
    class1: true,
    class2: true,
  }
  mltStyle = {
    'background' : 'red',
    'border' : '10px solid blue'
  }
  message: string = "";
  username: string = "Prashant";
  myMethod(){
    return "Hi "+ this.dynName;
  }

  addToCart(){
    return this.message = "Product has added to cart";
  }

  onInputClick(event: any){
    console.log(event.target.value);
  }

  getInputInfo(info: any){
    console.log(info.value);
  }
}

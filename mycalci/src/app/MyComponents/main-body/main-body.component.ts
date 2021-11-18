import { Component} from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  result:string="";
  longButtons:string[]= ['AC', 'CE'];
  buttons:string[]= ['7', '8', '9', '/','4','5','6', '*', '1','2', '3','-','.','0','=', '+' ]
   
  private previosValue:string="";
  private currentValue:string="";
  /**
   * function
   * @param value 
   */
  addToExpression(value:string){
    if(this.result!=""){
      this.previosValue = this.currentValue;
      this.currentValue = value;
    }
    if(value=="AC"){
       this.result="";
    }else if(value == "CE"){
       this.result = this.previosValue != "=" ? this.result.slice(0,-1): this.result;
    }else if(value == "="){
           this.result = eval(this.result)
    }else{
      this.result += value;
    }
  }
}
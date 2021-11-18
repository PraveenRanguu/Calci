import { Component } from '@angular/core';
@Component({
	selector: 'app-main-body',
	templateUrl: './main-body.component.html',
	styleUrls: ['./main-body.component.css']
})

export class MainBodyComponent {
	//initializing variables
	result: string = "";
	longButtons: string[] = ['AC', 'CE'];
	buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+']
	private previosValue: string = "";
	private currentValue: string = "";

	/**
	 * @description:This Function Evaluates the User Inputs and Perform Arithmatic Operations
	 * @param {string} value
	 */
	addToExpression(value: string) {
		if (this.result != "") {
			this.previosValue = this.currentValue;
			this.currentValue = value;
		}
		//Whenever AC Button is Clicked the Result State i.e display becomes Empty
		if (value == "AC") {
			this.result = "";
		}
		//pops the number from last index
		else if (value == "CE") {
			this.result = this.previosValue != "=" ? this.result.slice(0, -1) : this.result;
		}
		//the expression gets evaluated whenever = is clicked
		else if (value == "=") {
			this.result = eval(this.result)
		} else {
			this.result += value;
		}
	}
}
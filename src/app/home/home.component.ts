import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatSnackBar} from '@angular/material';

import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private completedCount: number = 0;
	private defaultCounter: number = 1;

	public boxes: Array<{id: number, class: string, value: string}> = [
		{id: 1, class: 'tictackElm', value: ''},
		{id: 2, class: 'tictackElm', value: ''},
		{id: 3, class: 'tictackElm', value: ''},
		{id: 4, class: 'tictackElm', value: ''},
		{id: 5, class: 'tictackElm', value: ''},
		{id: 6, class: 'tictackElm', value: ''},
		{id: 7, class: 'tictackElm', value: ''},
		{id: 8, class: 'tictackElm', value: ''},
		{id: 9, class: 'tictackElm', value: ''},
	];

	denPlayer: number = 1;

	constructor(private location: Location, public snackBar: MatSnackBar) {}

	ngOnInit() {

	}

	ngAfterContentInit(){
		let self = this;
		setTimeout(function(){
			self.openSnackBar(self.getDenPlayer(), '');
		},0);
	}
	changeDen(){
		this.denPlayer = (this.denPlayer === 2)? 1 :2;
	}

	getDenPlayer(){
		return "Player "+this.denPlayer;
	}

	getBoxItem(fromId){
		return this.boxes.filter(function(item){
			if(item.id == fromId){
				return item;
			}
		})[0];
	}

	setBoxItem(fromId, fromValue){
		let self = this;
		return this.boxes.filter(function(item){
			if(item.id == fromId){
				self.completedCount++;
				item.value = fromValue;
				return item;
			}
		});
	}

	isComplete(){
		return (this.completedCount == 9)?true:false;
	}

	isGameOver(){
		if(this.isComplete()){
			this.openSnackBar('', "Game is Over");
		}
	}

	openSnackBar(message: string, action: string) {
	    this.snackBar.open(message, action, {
	      duration: 4000,
	    });
	}

	checkHorizointalCondition(){
		let self = this;
		let rowChecker = {
			row1:function(){
				if(self.getBoxItem(1).value == '' || self.getBoxItem(2).value == '' || self.getBoxItem(3).value == ''){
					return false;
				}else{
					return (self.getBoxItem(1).value == self.getBoxItem(2).value && self.getBoxItem(2).value == self.getBoxItem(3).value);
				}
			},
			row2:function(){
				if(self.getBoxItem(4).value == '' || self.getBoxItem(5).value == '' || self.getBoxItem(6).value == ''){
					return false;
				}else{
					return (self.getBoxItem(4).value == self.getBoxItem(5).value && self.getBoxItem(5).value == self.getBoxItem(6).value);
				}
			},
			row3:function(){
				if(self.getBoxItem(7).value == '' || self.getBoxItem(8).value == '' || self.getBoxItem(9).value == ''){
					return false;
				}else{
					return (self.getBoxItem(7).value == self.getBoxItem(8).value && self.getBoxItem(8).value == self.getBoxItem(9).value);
				}
			},
		};
		return (rowChecker.row1() || rowChecker.row2() || rowChecker.row3());
	}

	checkVerticleCondition(){
		let self = this;
		let rowChecker = {
			row1:function(){
				if(self.getBoxItem(1).value == '' || self.getBoxItem(4).value == '' || self.getBoxItem(7).value == ''){
					return false;
				}else{
					return (self.getBoxItem(1).value == self.getBoxItem(4).value && self.getBoxItem(4).value == self.getBoxItem(7).value);
				}
			},
			row2:function(){
				if(self.getBoxItem(2).value == '' || self.getBoxItem(5).value == '' || self.getBoxItem(8).value == ''){
					return false;
				}else{
					return (self.getBoxItem(2).value == self.getBoxItem(5).value && self.getBoxItem(5).value == self.getBoxItem(8).value);
				}
			},
			row3:function(){
				if(self.getBoxItem(3).value == '' || self.getBoxItem(6).value == '' || self.getBoxItem(9).value == ''){
					return false;
				}else{
					return (self.getBoxItem(3).value == self.getBoxItem(6).value && self.getBoxItem(6).value == self.getBoxItem(9).value);
				}
			},
		};
		return (rowChecker.row1() || rowChecker.row2() || rowChecker.row3());
	}

	checkDiagonalCondition(){
		let self = this;
		let rowChecker = {
			row1:function(){
				if(self.getBoxItem(1).value == '' || self.getBoxItem(5).value == '' || self.getBoxItem(9).value == ''){
					return false;
				}else{
					return (self.getBoxItem(1).value == self.getBoxItem(5).value && self.getBoxItem(5).value == self.getBoxItem(9).value);
				}
			},
			row2:function(){
				if(self.getBoxItem(3).value == '' || self.getBoxItem(5).value == '' || self.getBoxItem(7).value == ''){
					return false;
				}else{
					return (self.getBoxItem(3).value == self.getBoxItem(5).value && self.getBoxItem(5).value == self.getBoxItem(7).value);
				}
			}
		};

		return (rowChecker.row1() || rowChecker.row2());
	}

	checkCondition(){
		if((this.completedCount > 2) && (this.checkHorizointalCondition() || this.checkVerticleCondition() || this.checkDiagonalCondition())){
			this.openSnackBar('' , this.getDenPlayer()+ " has won.");
			this.completedCount = 9;
		}
	}

	reload(){
		this.location.go('/');
	}
}

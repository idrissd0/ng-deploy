import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color!: string; //component input
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();

  constructur() { }

  ngOnInit(): void {

  }

  onClick() {
    this.btnClick.emit();
  }
}

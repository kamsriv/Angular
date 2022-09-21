import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-suggestion',
  templateUrl: './auto-suggestion.component.html',
  styleUrls: ['./auto-suggestion.component.css'],
})
export class AutoSuggestionComponent implements OnInit {

  public eventMessage : string = "";
  public countries: string[] = [
    'India',
    'Sri-Lanka',
    'Bangladesh',
    'Indonesia',
    'South Korea',
    'North Korea',
    'Bhutan',
    'Bangladesh',
  ];
  public IsBind: boolean = true;
  public var_clsBinding = {
    clsBindingMulti: this.IsBind,
    clsBinding: this.IsBind,
  };
  
  public OnClickMe(): void{
    this.eventMessage = "Clicked the button-Event occured";
  }

  public styles = {
    color:'green',
    fontStyle: 'Italic'
  }

  constructor() {}

  ngOnInit() {}
}

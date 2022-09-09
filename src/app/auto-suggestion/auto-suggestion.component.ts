import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-suggestion',
  templateUrl: './auto-suggestion.component.html',
  styleUrls: ['./auto-suggestion.component.css'],
})
export class AutoSuggestionComponent implements OnInit {
  countries: string[] = [
    'India',
    'Sri-Lanka',
    'Bangladesh',
    'Indonesia',
    'South Korea',
    'North Korea',
    'Bhutan',
    'Bangladesh',
  ];

  constructor() {}

  ngOnInit() {}
}

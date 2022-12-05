import { Component } from '@angular/core';
import { cards } from '../cards';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
})
export class RulesComponent {
  cards = [...cards];
}

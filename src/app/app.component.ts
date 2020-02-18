import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText: string = lorem.sentence();
  typedText: string = '';

  onTextInput(inputValue: string) {
    this.typedText = inputValue;
  }

  onButtonClick() {
    this.randomText = lorem.sentence();
    this.typedText = '';
  }

  getClassName(index: number): string {
    if (index >= this.typedText.length) {
      return 'pending';
    }

    return this.randomText[index] === this.typedText[index] ? 'correct' : 'incorrect';
  }
}

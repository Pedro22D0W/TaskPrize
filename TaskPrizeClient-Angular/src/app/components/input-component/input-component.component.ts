import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonInput, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
})

export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';

  private _model: any;
  @Input() set model(val: any) {
    this._model = val;
    this.modelChange.emit(this._model);
  }
  get model() {
    return this._model;
  }

  @Output() modelChange = new EventEmitter<any>();
}

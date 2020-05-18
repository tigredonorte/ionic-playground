import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-set-editor',
  templateUrl: './set-editor.component.html',
  styleUrls: ['./set-editor.component.scss'],
})
export class SetEditorComponent {

  @Input() public i = 0;
  @Input() public total = 0;
  @Input() public set = {series: 0, weight: 0};

  @Output() public next = new EventEmitter();

}

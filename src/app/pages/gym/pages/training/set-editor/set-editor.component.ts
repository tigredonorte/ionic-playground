import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-set-editor',
  templateUrl: './set-editor.component.html',
  styleUrls: ['./set-editor.component.scss'],
})
export class SetEditorComponent implements OnInit {

  public form: FormGroup;

  @Input() public i = 0;
  @Input() public total = 0;
  @Input() public set set(data) {
    this.form = new FormGroup({
      series: new FormControl(data.series),
      weight: new FormControl(data.weight)
    });
  }

  @Output() public next = new EventEmitter();
  @Output() public formChanged = new EventEmitter();

  public ngOnInit() {
    this.form.valueChanges.pipe(debounceTime(100)).subscribe(data => this.formChanged.emit({i: this.i, ...data}));
  }

}

import {
  Component, OnInit,
  Output, EventEmitter
} from '@angular/core';

interface eventAdd {
  id: number;
  name: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  id;
  name;

  @Output() newItemAdded: EventEmitter<eventAdd> = new EventEmitter();

  addNewItem() {
    this.newItemAdded.emit(
      {
        'id': this.id,
        'name': this.name
      }
    );

    this.id = null;
    this.name = null;
  }
}

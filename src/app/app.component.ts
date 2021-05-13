import { Component } from '@angular/core';
import { Item } from './model/item';
import { LocalStorageService } from './services/local-storage.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: LocalStorageService,
    private modalService: ModalService) { }

  arrayOfItems: Item[] = [];

  onAddItem(item) {
    if  (this.arrayOfItems.length < 11){
      this.arrayOfItems.push(item);
      this.service.set("data", this.arrayOfItems);
    }else{
      this.modalService.open();
    }
  }

  onDelete(item) {
    this.arrayOfItems.splice(this.arrayOfItems.findIndex(element => element === item), 1)
    this.service.set("data", this.arrayOfItems);
  }

  onUpdate(item) {
    this.service.set("data", this.arrayOfItems);
  }

  onCheck() {
    this.service.set("data", this.arrayOfItems);
  }


  ngOnInit(): void {
    this.arrayOfItems = this.service.get("data");
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  message: string = "5$ for new paper :)";
  display$: Observable<'open' | 'close'>;

  close() {
    this.modalService.close();
  }

  ngOnInit(): void {
    this.display$ = this.modalService.watch();
  }


}

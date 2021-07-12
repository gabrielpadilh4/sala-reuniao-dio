import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../model/room';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'dio-create-room',
  templateUrl: './create-room.component.html',
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room();
  _id: number = 0;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this._id = +this.activatedRoute.snapshot.paramMap.get('id')!;

    if(this._id != 0) {
      this.findById(this._id);
    }
  }

  save(): void {
    this.roomService.save(this.room).subscribe({
      next: (room) => {
        this.router.navigate(['/room']);
      },
      error: (err) => console.error('Error', err),
    });
  }

  findById(id: number): void {
    this.roomService.retrieveById(id).subscribe({
      next: (room) => (this.room = room),
      error: (err) => console.error('Error', err),
    });
  }
}

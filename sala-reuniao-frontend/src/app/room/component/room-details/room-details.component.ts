import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../../model/room';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'dio-room-details',
  templateUrl: './room-details.component.html',
})
export class RoomDetailsComponent implements OnInit {
  room: Room;

  constructor(
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
      this.findById(+this.activatedRoute.snapshot.paramMap.get('id')!);
  }

  findById(id: number): void {
    this.roomService.retrieveById(id).subscribe({
      next: (room) => (this.room = room),
      error: (err) => console.error('Error', err),
    });
  }
}

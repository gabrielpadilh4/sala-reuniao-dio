import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../model/room';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'dio-room-list',
  templateUrl: './room-list.component.html',
})
export class RoomListComponent implements OnInit {
  _rooms: Room[] = [];
  _filterBy: string = '';

  filteredRooms: Room[] = [];

  constructor(private roomService: RoomService, private router: Router) {}

  ngOnInit(): void {
    this.retriveAll();
  }

  retriveAll(): void {
    this.roomService.retrieveAll().subscribe({
      next: (rooms) => {
        this._rooms = rooms;
        this.filteredRooms = this._rooms;
      },
      error: (err) => console.error('Error', err), // TODO - Improve error treatment
    });
  }

  deleteById(id: number): void {
    this.roomService.deleteById(id).subscribe({
      next: () => {
        this.retriveAll();
      },
      error: (err) => console.error(),
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredRooms = this._rooms.filter(
      (room: Room) =>
        room.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}

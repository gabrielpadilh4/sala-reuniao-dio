import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateRoomComponent } from './component/create-room/create-room.component';
import { RoomDetailsComponent } from './component/room-details/room-details.component';
import { RoomListComponent } from './component/room-list/room-list.component';
import { UpdateRoomComponent } from './component/update-room/update-room.component';
import { RoomService } from './service/room.service';

@NgModule({
  declarations: [
    CreateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateRoomComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'room',
        component: RoomListComponent,
      },
      {
        path: 'room/info/:id',
        component: RoomDetailsComponent,
      },
      {
          path: 'room/create',
          component: CreateRoomComponent
      },
    ]),
  ],
})
export class RoomModule {}

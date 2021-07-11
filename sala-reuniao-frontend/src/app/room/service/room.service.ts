import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private roomUrl: string = 'http://localhost:8080/api/v1/room';

  constructor(private httpClient: HttpClient) {}

  retrieveAll(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.roomUrl);
  }

  retrieveById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(`${this.roomUrl}/${id}`);
  }

  save(room: Room): Observable<Room> {
    if (room.id) {
      return this.httpClient.put<Room>(`${this.roomUrl}/${room.id}`, room);
    } else {
      return this.httpClient.post<Room>(`${this.roomUrl}`, room);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.roomUrl}/${id}`);
  }
}

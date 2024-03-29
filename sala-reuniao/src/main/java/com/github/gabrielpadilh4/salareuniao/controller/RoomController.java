package com.github.gabrielpadilh4.salareuniao.controller;

import com.github.gabrielpadilh4.salareuniao.exception.ResourceNotFoundException;
import com.github.gabrielpadilh4.salareuniao.model.Room;
import com.github.gabrielpadilh4.salareuniao.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<Room> getAllRooms() {
        return roomService.findAllRooms();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Room getRoomById(@PathVariable("id") long id) throws ResourceNotFoundException {
        return roomService.findRoomById(id);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Room createRoom(@Valid @RequestBody Room room) {
        return roomService.createRoom(room);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Room updateRoom(@PathVariable("id") long id, @Valid @RequestBody Room room) throws ResourceNotFoundException {
        return roomService.updateRoom(id, room);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRoom(@PathVariable("id") long id) throws ResourceNotFoundException {
        roomService.deleteRoom(id);
    }
}

package com.github.gabrielpadilh4.salareuniao.repository;

import com.github.gabrielpadilh4.salareuniao.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {


}

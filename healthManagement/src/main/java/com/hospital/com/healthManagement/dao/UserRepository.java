package com.hospital.com.healthManagement.dao;


import com.hospital.com.healthManagement.model.Users;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<Users, Long> {


    @Query(
            value = "select * from users where name=?1",
            nativeQuery = true
    )
    List<Users> findUserByName(String name);

    @Modifying
    @Query(
            value = "select * from users where name=?1 and password=?2",
            nativeQuery = true
    )
    List<Users> findUserByNameAndPassword(String name,String password);

}

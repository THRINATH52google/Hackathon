package com.hospital.com.healthManagement.Controller;

import com.hospital.com.healthManagement.model.PatientFilledData;
import com.hospital.com.healthManagement.model.Users;
import com.hospital.com.healthManagement.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UsersController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/register")
    public String createUser(@RequestBody Users user){
        String res = userService.createUser(user);
        return res;
    }


    @GetMapping("/getValidate/{name}/{password}")
    public String  getValidate(@PathVariable String name,@PathVariable String password){
       String res = userService.createUser(name,password);
        return res;
    }

    @GetMapping("/findByPatientId/{patientId}")
    public Optional<PatientFilledData> findByPatientId(@PathVariable String patientId){
        return  userService.findByPatientId(patientId);
    }

}

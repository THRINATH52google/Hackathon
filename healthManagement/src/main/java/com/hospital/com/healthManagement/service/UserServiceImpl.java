package com.hospital.com.healthManagement.service;

import com.hospital.com.healthManagement.dao.PatientFilledFormRepository;
import com.hospital.com.healthManagement.dao.UserRepository;
import com.hospital.com.healthManagement.model.PatientFilledData;
import com.hospital.com.healthManagement.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PatientFilledFormRepository patientFilledFormRepository;

    public String createUser(Users user) {
        try{
            Users res = userRepository.save(user);
        }catch(Exception e){
            return "failed";
        }
    return "success";
    }

    public String createUser(String id, String password) {

       List<Users> userList = userRepository.findUserByName(id);

       if(userList.size()==0){
           return "user not found";
       }

     List<Users> res = userRepository.findUserByNameAndPassword(id,password);
     if(res.size()>0){
         return "success";
     }
     return "fail";
    }

    public Optional<PatientFilledData> findByPatientId(String patientId) {
      return   patientFilledFormRepository.findByPatientId(Long.valueOf(patientId));
    }
}

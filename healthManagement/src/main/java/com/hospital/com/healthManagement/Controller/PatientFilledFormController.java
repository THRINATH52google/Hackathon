package com.hospital.com.healthManagement.Controller;

import com.hospital.com.healthManagement.model.PatientFilledData;
import com.hospital.com.healthManagement.model.Users;
import com.hospital.com.healthManagement.service.PatientFilledFormService;
import com.hospital.com.healthManagement.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class PatientFilledFormController{

    @Autowired
    PatientFilledFormService patientFilledFormService;

    @PostMapping("/fillForm")
    public String saveFormData(@RequestBody PatientFilledData userData){
        String res = patientFilledFormService.saveFormData(userData);
        return res;
    }

    @GetMapping("/getValuePagenation/{offset}/{pagesize}")
    public Page<PatientFilledData> getValuesPagenation(@PathVariable String offset, @PathVariable String pagesize){
        Page<PatientFilledData> res = patientFilledFormService.getValuesPagenation(offset, pagesize);
        return res;
    }
}

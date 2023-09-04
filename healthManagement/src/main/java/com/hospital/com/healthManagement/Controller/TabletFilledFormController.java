package com.hospital.com.healthManagement.Controller;

import com.hospital.com.healthManagement.model.PatientFilledData;
import com.hospital.com.healthManagement.model.Tablet;
import com.hospital.com.healthManagement.service.PatientFilledFormService;
import com.hospital.com.healthManagement.service.TabletFilledFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class TabletFilledFormController {
    @Autowired
    TabletFilledFormService tabletFilledFormService;

    @PostMapping("/tabletfillForm")
    public String saveFormData(@RequestBody Tablet userData){
        String res = tabletFilledFormService.saveFormData(userData);
        return res;
    }

    @GetMapping("/getTabletData")
    public List<Tablet> getTabletData(@RequestParam(required = false) String patientId){
        return  tabletFilledFormService.getTabletData(patientId);
    }
}

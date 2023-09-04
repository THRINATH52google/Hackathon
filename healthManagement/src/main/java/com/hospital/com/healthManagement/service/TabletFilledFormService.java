package com.hospital.com.healthManagement.service;


import com.hospital.com.healthManagement.dao.TabletFilledFormRepository;
import com.hospital.com.healthManagement.model.Tablet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TabletFilledFormService {
    @Autowired
    TabletFilledFormRepository tabletFilledFormRepository;

    public String saveFormData(Tablet userData) {
        tabletFilledFormRepository.save(userData);
        return "success";
    }

    public List<Tablet> getTabletData(String patientId) {
        if(patientId!=null && patientId!=""){
            return  (List<Tablet>) tabletFilledFormRepository.findByPatientId(Long.valueOf(patientId));
        }
        return (List<Tablet>) tabletFilledFormRepository.findAll();
    }
}

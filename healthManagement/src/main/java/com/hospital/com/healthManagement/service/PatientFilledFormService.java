package com.hospital.com.healthManagement.service;

import com.hospital.com.healthManagement.dao.PatientFilledFormRepository;
import com.hospital.com.healthManagement.model.PatientFilledData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PatientFilledFormService {

    @Autowired
    PatientFilledFormRepository patientFilledFormRepository;
    public String saveFormData(PatientFilledData userData) {
        patientFilledFormRepository.save(userData);
        return "success";
    }

    public Page<PatientFilledData> getValuesPagenation(String offset, String pagesize) {

        int  offSet= Integer.valueOf(offset);
        int pageSize = Integer.valueOf(pagesize);
        Pageable pages = PageRequest.of(offSet,pageSize);
        return  patientFilledFormRepository.findAll(pages);
    }
}

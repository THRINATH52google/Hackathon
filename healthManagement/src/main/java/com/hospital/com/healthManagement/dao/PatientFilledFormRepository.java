package com.hospital.com.healthManagement.dao;

import com.hospital.com.healthManagement.model.PatientFilledData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PatientFilledFormRepository extends CrudRepository<PatientFilledData,Long> {

    Page<PatientFilledData> findAll(Pageable pageable);

    @Query(value = "select * from patient_filled_data where patient_id = ?1",nativeQuery = true)
    Optional<PatientFilledData> findByPatientId(Long aLong);
}

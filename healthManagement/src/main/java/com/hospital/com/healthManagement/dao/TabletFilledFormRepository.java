package com.hospital.com.healthManagement.dao;

import com.hospital.com.healthManagement.model.Tablet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TabletFilledFormRepository extends CrudRepository<Tablet,Long> {
    List<Tablet> findByPatientId(Long aLong);
}

package com.hospital.com.healthManagement.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="tabletInfo")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Tablet {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    private Long id;
    private String tabletName;
    private String tabletType;
    private String tabletPrice;
    private String dosage;
    private String tabletDescription;
    private String tabletQuantity;
    private Long patientId;
    private Long doctorId;
    private String createdDate;
}

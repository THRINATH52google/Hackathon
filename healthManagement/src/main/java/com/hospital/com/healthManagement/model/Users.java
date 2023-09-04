package com.hospital.com.healthManagement.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="users")
public class Users {
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    private Long id;
    private String name;
    private String password;
    private String userType;
    private String email;
    private String phone;
    private String aadharNo;
    private String age;
    private String createdDate;
//    private String confirmPassword;
}

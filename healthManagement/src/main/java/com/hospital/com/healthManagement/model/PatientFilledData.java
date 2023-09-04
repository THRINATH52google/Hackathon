package com.hospital.com.healthManagement.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PatientFilledData {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    private Long id;
    private Long patientId;
    private String occupation;
    private String employer;
    private String employmentStatus;
    private String insurancePlan;
    private String maritalStatus;
    private String livingWith;
    private String emergencyContactPerson;
    private String emergencyContactRelation;
    private String referralSource;
    private String desiredTherapies;
    private String healthConcerns;
    private String healthGoals;
    private String previousConditions;
    private String previousSurgeries;
    private String previousHospitalizations;
    private String allergies;
    private String medications;
    private String supplements;
    private String healthcareProviders;
    private double currentHeight;
    private double currentWeight;
    private double idealWeight;
    private double maxWeight;
    private String generalHealth;
    private boolean cholesterolChecked;
    private Date cholesterolCheckDate;
    private boolean papSmear;
    private boolean abnormalPap;
    private Date abnormalPapTreatmentDate;
    private boolean mammogram;
    private Date mammogramDate;
    private boolean boneDensityTest;
    private Date boneDensityTestDate;
    private boolean receivedVaccinations;
    private boolean knownVaccineReaction;
    private boolean difficultyFallingAsleep;
    private boolean uninterruptedSleep;
    private int hoursOfSleepPerNight;
    private boolean wakeRefreshed;
    private boolean takeSleepAids;
    private String sleepAidType;
    private String dietaryPreferences;
    private String breakfast;
    private String lunch;
    private String dinner;
    private String snacks;
    private String drinks;
    private String dailyWaterIntake;
    private boolean happyWithDiet;
    private boolean drinkAlcohol;
    private String alcoholDetails;
    private boolean drinkCaffeine;
    private String caffeineDetails;
    private boolean useTobacco;
    private String tobaccoDetails;
    private boolean recreationalDrugUse;
    private String recreationalDrugDetails;
    private boolean exercise;
    private String exerciseFrequency;
    private boolean fatigueOrLowEnergy;
    private boolean insomnia;
    private boolean appetiteChanges;
    private boolean unexplainedWeightChanges;
    private boolean feversOrChills;
    private boolean coldIntolerance;
    private boolean heatIntolerance;
    private Time appointmentDate;

}

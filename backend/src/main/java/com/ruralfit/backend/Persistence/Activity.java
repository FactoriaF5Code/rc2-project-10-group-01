package com.ruralfit.backend.Persistence;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="books")
public class Activity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idActivity;
    private String name;
    private String description;
    private Date date;
    private Time time;
    private String trainer;

    public Activity(String name, String description, Date date, Time time, String trainer) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.time = time;
        this.trainer = trainer;
    }

    public Activity() {

    }

    public Integer getIdActivity() {
        return idActivity;
    }

    public void setIdActivities(Integer idActivity) {
        this.idActivity = idActivity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

}

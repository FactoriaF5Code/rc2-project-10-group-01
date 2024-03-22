package com.ruralfit.backend.Persistence;



import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="activities")
public class Activity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private Timestamp start;
    private Timestamp end;
    private String trainer;
    private String urlrural;
    

    public Activity(String name, String description, Timestamp start, Timestamp end, String trainer, String urlrural) {
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.trainer = trainer;
        this.urlrural = urlrural;
    }
    
    public Activity() {
        
    }
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
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
    
    public Timestamp getStart() {
        return start;
    }
    
    public void setStart(Timestamp start) {
        this.start = start;
    }
    
    public Timestamp getEnd() {
        return end;
    }

    public void setEnd(Timestamp end) {
        this.end = end;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

    public String getUrlrural() {
        return urlrural;
    }

    public void setUrlrural(String urlrural) {
        this.urlrural = urlrural;
    }

}

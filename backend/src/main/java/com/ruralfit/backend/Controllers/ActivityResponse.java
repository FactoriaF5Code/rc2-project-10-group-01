package com.ruralfit.backend.Controllers;

import java.sql.Timestamp;

public class ActivityResponse {
    private Integer id;
    private String name;
    private String description;
    private Timestamp start;
    private Timestamp end;
    private String trainer;
    private String urlrural;


    public ActivityResponse(Integer id, String name, String description, Timestamp start, Timestamp end, String trainer, String urlrural) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.trainer = trainer;
        this.urlrural = urlrural;
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

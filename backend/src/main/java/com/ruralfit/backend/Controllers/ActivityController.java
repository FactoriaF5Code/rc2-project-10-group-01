package com.ruralfit.backend.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.ruralfit.backend.Persistence.Activity;
import com.ruralfit.backend.Persistence.ActivityRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ActivityController {
    
    private ActivityRepository repository;
    public ActivityController(@Autowired ActivityRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/api/activities")
    public List<ActivityResponse> showActivities() {
        List<ActivityResponse> activities = new ArrayList<ActivityResponse>();
        List<Activity> activitiesInDataBaseActivities = repository.findAll();
        for (Activity activity : activitiesInDataBaseActivities) {
            activities.add(new ActivityResponse(activity.getId(), activity.getName(), activity.getDescription(), activity.getStart(), activity.getEnd(), activity.getTrainer(), activity.getUrlrural()));
        }
        return activities;
    }

    @GetMapping("/api/activities/{idActivity}")
    public ResponseEntity<ActivityResponse> getActivityById(@PathVariable Integer idActivity) {
        Optional<Activity> optionalActivity = repository.findById(idActivity);
        if (optionalActivity.isPresent()) {
            Activity activity = optionalActivity.get();
            ActivityResponse response = (new ActivityResponse(activity.getId(), activity.getName(), activity.getDescription(), activity.getStart(), activity.getEnd(), activity.getTrainer(), activity.getUrlrural()));
            return ResponseEntity.ok().body(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

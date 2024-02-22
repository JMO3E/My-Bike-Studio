package com.mbl.mblapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mbl.mblapi.model.Bike;
import com.mbl.mblapi.service.BikeService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("api/")
public class BikeController {

    @Autowired
    private BikeService bikeService;

    @GetMapping("bikes")
    public List<Bike> getBikes() {
        return bikeService.getBikes();
    }

    @GetMapping("bikes/{bikeid}")
    public Bike getBikeById(@PathVariable("bikeid") int bikeid) {
        return bikeService.getBikeById(bikeid);
    }

    @PostMapping("bikes/add")
    public int addBike(@RequestBody Bike bike) {
        bikeService.addBike(bike);
        return bike.getId();
    }

    @PutMapping("bikes/update/{bikeid}")
    public Bike updateBike(@RequestBody Bike bike, @PathVariable("bikeid") int bikeid) {
        bikeService.updateBike(bike, bikeid);
        return bike;
    }

    @DeleteMapping("bikes/delete/{bikeid}")
    public void deleteBike(@PathVariable("bikeid") int bikeid) {
        bikeService.deleteBike(bikeid);
    }
}

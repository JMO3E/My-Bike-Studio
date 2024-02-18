package com.mbl.mblapi.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbl.mblapi.model.Bike;
import com.mbl.mblapi.repository.BikeRepository;

@Service
public class BikeService {

    @Autowired
    private BikeRepository bikeRepository;

    public List<Bike> getBikes(){
        return bikeRepository.findAll();
    }

    public Bike getBikeById(int id){
        return bikeRepository.findById(id).get();
    }

    public Bike addBike(Bike bike){
        return bikeRepository.save(bike);
    }

    public Bike updateBike(Bike bike, int id){
        
        Bike bikeUpdate = bikeRepository.findById(id).get();

        if (Objects.nonNull(bike.getBrand()) && !"".equalsIgnoreCase(bike.getBrand())) {
            bikeUpdate.setBrand(bike.getBrand());
        }
 
        if (Objects.nonNull(bike.getDescription()) && !"".equalsIgnoreCase(bike.getDescription())) {
            bikeUpdate.setDescription(bike.getDescription());
        }

        if (Objects.nonNull(bike.getImagelink()) && !"".equalsIgnoreCase(bike.getImagelink())) {
            bikeUpdate.setImagelink(bike.getImagelink());
        }

        return bikeRepository.save(bikeUpdate);
    }

    public void deleteBike(int bikeId){
        bikeRepository.deleteById(bikeId);
    }
}

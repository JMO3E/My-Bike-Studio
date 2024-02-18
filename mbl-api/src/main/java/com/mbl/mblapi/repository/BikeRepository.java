package com.mbl.mblapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbl.mblapi.model.Bike;

@Repository
public interface BikeRepository extends JpaRepository<Bike, Integer>{

}

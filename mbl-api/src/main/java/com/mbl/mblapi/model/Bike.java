package com.mbl.mblapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bikes")
public class Bike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Brand")
    private String brand;

    @Column(name = "Description")
    private String description;

    @Column(name = "Imagelink")
    private String imagelink;

    public Bike() {

    }

    public Bike(String brand, String description, String imagelink) {
        this.brand = brand;
        this.description = description;
        this.imagelink = imagelink;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return this.brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImagelink() {
        return this.imagelink;
    }

    public void setImagelink(String imagelink) {
        this.imagelink = imagelink;
    }
    
}

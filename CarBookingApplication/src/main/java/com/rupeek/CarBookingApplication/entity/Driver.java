package com.rupeek.CarBookingApplication.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Driver extends AUser implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "driver_id")
    private int driver_id;

    String license_number;

    Cab cab;

    Float rating;

    public Driver(String username, String password, String address, int number, String email_address) {
        super(username, password, address, number, email_address);
    }


    public int getDriver_id() {
        return driver_id;
    }

    public void setDriver_id(int driver_id) {
        this.driver_id = driver_id;
    }

    public String getLicense_number() {
        return license_number;
    }

    public void setLicense_number(String license_number) {
        this.license_number = license_number;
    }

    public Cab getCab() {
        return cab;
    }

    public void setCab(Cab cab) {
        this.cab = cab;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public int getDriverid() {
        return driver_id;
    }

    public void setDriverid(int driver_id) {
        this.driver_id = driver_id;
    }

}

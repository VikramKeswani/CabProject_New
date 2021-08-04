package com.rupeek.CarBookingApplication.entity;

import javax.persistence.*;

@Entity
public class Cab {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int cabId;

    @Column(name="cartype")
    private String carType;
    @Column(name="perkmrate")
    private float perKmRate;

    @OneToOne(mappedBy = "cab")
    private Driver driver;

    public Cab() {
        super();
    }

    public int getCabId() {
        return cabId;
    }

    public void setCabId(int cabId) {
        this.cabId = cabId;
    }

    public String getCarType() {
        return carType;
    }

    public void setCarType(String carType) {
        this.carType = carType;
    }

    public float getPerKmRate() {
        return perKmRate;
    }

    public void setPerKmRate(float perKmRate) {
        this.perKmRate = perKmRate;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }
}

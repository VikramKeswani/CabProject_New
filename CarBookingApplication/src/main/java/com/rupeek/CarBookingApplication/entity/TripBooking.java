package com.rupeek.CarBookingApplication.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="TripBooking")
public class TripBooking  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int tripBookingId;



    @OneToOne//(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "customerId", referencedColumnName = "customerid", unique = true)
    private Customer customer;

    @Column(name="Source")
    private String fromLocation;

    @Column(name="destination")
    private String toLocation;

    @Column(name="fromDateTime")
    @JsonFormat(pattern="DD-MM-YYYY")
    private Date fromDateTime;


    @Column(name="toDateTime")
    @JsonFormat(pattern="DD-MM-YYYY")
    private Date toDateTime;


    @Column(name="status")
    boolean status;

    @Column(name="distancetocover")
    float distanceKm;

    @Column(name="amounttopay")
    float billAmount;


    @ManyToOne//(cascade = CascadeType.MERGE)
    // @JoinColumn annotation helps us specify the column
    // we'll use for joining an entity association or element collection.
    @JoinColumn(name = "driverId", referencedColumnName = "driverid")
    private Driver driver;

    public TripBooking() {
        super();
    }

    public int getTripBookingId() {
        return tripBookingId;
    }

    public void setTripBookingId(int tripBookingId) {
        this.tripBookingId = tripBookingId;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getFromLocation() {
        return fromLocation;
    }

    public void setFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
    }

    public String getToLocation() {
        return toLocation;
    }

    public void setToLocation(String toLocation) {
        this.toLocation = toLocation;
    }

    public Date getFromDateTime() {
        return fromDateTime;
    }

    public void setFromDateTime(Date fromDateTime) {
        this.fromDateTime = fromDateTime;
    }

    public Date getToDateTime() {
        return toDateTime;
    }

    public void setToDateTime(Date toDateTime) {
        this.toDateTime = toDateTime;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public float getDistanceKm() {
        return distanceKm;
    }

    public void setDistanceKm(float distanceKm) {
        this.distanceKm = distanceKm;
    }

    public float getBillAmount() {
        return billAmount;
    }

    public void setBillAmount(float billAmount) {
        this.billAmount = billAmount;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }
}

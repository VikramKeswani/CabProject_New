package com.rupeek.CarBookingApplication.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class TripBooking implements Serializable {
    @Id
    @Column(name="TripBookingId")
    private int tripBookingId;

    @OneToOne(mappedBy = "tripBooking")
    private Customer customerId;

    @Column(name="Source")
    private String fromLocation;

    @Column(name="Destination")
    private String toLocation;

    @Column(name="ArrivalTime")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date fromDateTime;

    @Column(name="DepatureTime")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date toDateTime;

    @Column(name="Ideal/Busy")
    boolean status;

    @Column(name="DistanceToCover")
    float distanceKm;

    @Column(name="AmountToPay")
    float billAmount;

    public TripBooking(int tripBookingId, Customer customerId, String fromLocation, String toLocation, Date fromDateTime, Date toDateTime, boolean status, float distanceKm, float billAmount) {
        this.tripBookingId = tripBookingId;
        this.customerId = customerId;
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.fromDateTime = fromDateTime;
        this.toDateTime = toDateTime;
        this.status = status;
        this.distanceKm = distanceKm;
        this.billAmount = billAmount;
    }

    public int getTripBookingId() {
        return tripBookingId;
    }

    public void setTripBookingId(int tripBookingId) {
        this.tripBookingId = tripBookingId;
    }

    public Customer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Customer customerId) {
        this.customerId = customerId;
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

    public boolean isStatus() {
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
}

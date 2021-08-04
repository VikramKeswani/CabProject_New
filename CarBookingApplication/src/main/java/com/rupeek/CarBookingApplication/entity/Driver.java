package com.rupeek.CarBookingApplication.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Driver")
public class Driver extends AUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "driverid")
    private int driverId;

    @Column(name="liceseneplatenumber")
    private String licenceNo;
    @Column(name="rating")
    private float rating;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cabId", referencedColumnName = "id")
    private Cab cab;

    @OneToMany(mappedBy = "driver")
    private List<TripBooking> tripBookingList;

    public Driver(String username, String password, String address, int phone_number, String email_address) {
        super(username, password, address, phone_number, email_address);
    }

    public String getLicenceNo() {
        return licenceNo;
    }

    public void setLicenceNo(String licenceNo) {
        this.licenceNo = licenceNo;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public int getDriverId() {
        return driverId;
    }

    public void setDriverId(int driverId) {
        this.driverId = driverId;
    }

    public Cab getCab() {
        return cab;
    }

    public void setCab(Cab cab) {
        this.cab = cab;
    }
}

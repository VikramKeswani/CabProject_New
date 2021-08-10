package com.rupeek.CarBookingApplication.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name="CustomerTable")
public class Customer extends AUser{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerid")
    private int customerId;


    @JsonIgnore
    @OneToOne(mappedBy = "customer")
        private TripBooking tripBookingId;

    public Customer(){
        super();
    }

    public Customer(String username, String password, String address, int phone_number, String email_address) {
        super(username, password, address, phone_number, email_address);
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public TripBooking getTripBookingId() {
        return tripBookingId;
    }

    public void setTripBookingId(TripBooking tripBookingId) {
        this.tripBookingId = tripBookingId;
    }
}

package com.rupeek.CarBookingApplication.entity;

import javax.persistence.*;

@Entity
@Table(name="CustomerTable")
public class Customer extends AUser{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerid")
    private int customerId;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tripBookingId", referencedColumnName = "id")
    private TripBooking tripBookingId;


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

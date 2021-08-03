package com.rupeek.CarBookingApplication.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Customer extends AUser implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(columnDefinition = "customer_id")
    private int id;

    public Customer(String username, String password, String address, int phone_number, String email_address) {
        super(username, password, address, phone_number, email_address);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}

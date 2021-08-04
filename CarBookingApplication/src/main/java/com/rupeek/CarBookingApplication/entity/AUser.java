package com.rupeek.CarBookingApplication.entity;

import javax.persistence.*;
@MappedSuperclass
public class AUser {
    @Column(name="username")
    private String username;
    @Column(name="password")
    private String password;
    @Column(name="address")
    private String address;
    @Column(name="mobilenumber")
    private int phone_number;
    @Column(name="emailaddress")
    private String email_address;

    public AUser(String username, String password, String address, int phone_number, String email_address) {
        this.username = username;
        this.password = password;
        this.address = address;
        this.phone_number = phone_number;
        this.email_address = email_address;
    }

    public AUser() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(int phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail_address() {
        return email_address;
    }

    public void setEmail_address(String email_address) {
        this.email_address = email_address;
    }
}

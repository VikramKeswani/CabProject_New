package com.rupeek.CarBookingApplication.entity;

import javax.persistence.*;

@Entity
@Table(name = "AdminTable")
public class Admin extends AUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adminid")
    private int adminId;

    public Admin(String username, String password, String address, int phone_number, String email_address) {
        super(username, password, address, phone_number, email_address);
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }
}

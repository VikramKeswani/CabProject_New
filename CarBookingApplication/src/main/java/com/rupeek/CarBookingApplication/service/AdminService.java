package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.AdminRepository;
import com.rupeek.CarBookingApplication.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("AdminRepository")
public class AdminService implements IService<Admin> {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public void create(Admin object) {
        adminRepository.save(object);
    }

    @Override
    public Admin get(Integer id) {
        return null;
    }

    @Override
    public void update(Admin object) {

    }

    @Override
    public void delete(Integer id) {

    }
}

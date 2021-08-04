package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.CustomerRepository;
import com.rupeek.CarBookingApplication.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("CustomerRepository")
public class CustomerService implements IService<Customer> {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public void create(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public Customer get(Integer id) {
        return customerRepository.findById(id).get();
    }



    @Override
    public void update(Customer object){
        customerRepository.save(object);
    }

    @Override
    public void delete(Integer id) {
        Customer driver = customerRepository.findById(id).get();
        customerRepository.delete(driver);
    }

}

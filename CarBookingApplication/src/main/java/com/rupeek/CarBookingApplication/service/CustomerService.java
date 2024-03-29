package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.CustomerRepository;
import com.rupeek.CarBookingApplication.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;


@Service("CustomerRepository")
public class CustomerService implements IService<Customer>{
    @Autowired
    private CustomerRepository customerRepository;


    @Override
    public void create(Customer customer) {
        customerRepository.save(customer);
    }

    public Customer createM(Customer customer) {
        return customerRepository.save(customer);
        //return cabn;
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
        customerRepository.deleteById(id);
    }

    public Customer validateCustomer(String username,String password){
        Customer customer = customerRepository.validateCustomer(username,password);
        if(customer!=null) {
            return customer;
        }

        System.out.println("Wrong UserName Or Password");
        return null;
    }

    public List<Customer> viewCustomers(){
        return customerRepository.findAll();
    }

}

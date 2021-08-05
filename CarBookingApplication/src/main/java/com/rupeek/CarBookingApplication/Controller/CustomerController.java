package com.rupeek.CarBookingApplication.Controller;

import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.service.CustomerService;
import com.rupeek.CarBookingApplication.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired(required = true)
    CustomerService customerService;


    @PostMapping("/insert")
    public void createCustomer(@RequestBody Customer customer){
            customerService.create(customer);
    }

    @GetMapping("/get")
    public ResponseEntity<Customer> getCustomer(@RequestParam Integer id){
        //return customerService.get(id);
        Customer customer = customerService.get(id);
        if(customer==null){
            return new ResponseEntity( "Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Customer>(customer,HttpStatus.OK);
    }

    @GetMapping("/getallcustomer")
    public ResponseEntity<List<Customer>> getAllCustomer(){
        List <Customer> customers = customerService.viewCustomers();

        if(customers.isEmpty()) {
            return new ResponseEntity("Sorry No customer available", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List <Customer> >(customers, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{customerId}")
    public void deleteCustomer(@PathVariable("customerId") int customerId) {
        customerService.delete(customerId);
    }

    @PutMapping("/update")
    public void updateCustomer(@RequestBody Customer customer) {
        customerService.update(customer);
    }

    @PostMapping("/validate")
    public ResponseEntity<String> validateUser(@RequestBody Customer customer){
                String user=customer.getUsername();
                String pass = customer.getPassword();

                if(customerService.validateCustomer(user,pass)!=null){
                    return new ResponseEntity("Login Successful", HttpStatus.ACCEPTED);
                }

                return new ResponseEntity<String>("Falied Login",HttpStatus.NOT_FOUND);
    }


}

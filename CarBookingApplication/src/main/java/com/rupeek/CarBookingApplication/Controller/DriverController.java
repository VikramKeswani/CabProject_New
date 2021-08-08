package com.rupeek.CarBookingApplication.Controller;

import com.rupeek.CarBookingApplication.entity.Admin;
import com.rupeek.CarBookingApplication.entity.Cab;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.Driver;
import com.rupeek.CarBookingApplication.service.CabService;
import com.rupeek.CarBookingApplication.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/driver")
public class DriverController {

    @Autowired(required = true)
    DriverService driverService;

    @PostMapping("/insert")
    public ResponseEntity<Driver> insertDriver(@RequestBody Driver driver) {
        if (driver == null) {
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        Driver drive = driverService.createM(driver);
        return new ResponseEntity(drive, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Driver> updateAdmin(@RequestBody Driver driver) {

        if (driver == null) {
            return new ResponseEntity("Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        driverService.create(driver);
        return new ResponseEntity("Succesfully Admin Updated", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAdmin(@RequestParam Integer cabId) {
        if (cabId == null) {
            return new ResponseEntity<String>("Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }
        driverService.delete(cabId);
        return new ResponseEntity<String>("Succesfully Admin Deleted", HttpStatus.OK);
    }


    @GetMapping("/get")
    public ResponseEntity<Driver> viewDriver(@RequestParam Integer id) {
        Driver driver = driverService.get(id);
        if (driver == null) {
            return new ResponseEntity("Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(driver, HttpStatus.OK);
    }


    @GetMapping("/getbestdriver")
    public List<Driver> viewBestDrivers() {
        List<Driver> driver = driverService.viewBestDriver();
        System.out.println(driver);
        return driver;
    }

    @GetMapping("/viewfreedriver")
    public List<Driver> viewFreeDriver(){
        return driverService.viewFreeDriver();
    }

    @PostMapping("/validate")
    public ResponseEntity<Driver> validateUser(@RequestBody Driver driver){
        String email=driver.getEmail_address();
        String pass = driver.getPassword();
        Driver c = driverService.validateDriver(email,pass);
        if(c!=null){
            return new ResponseEntity(c,HttpStatus.ACCEPTED);
        }

        return new ResponseEntity(null,HttpStatus.NOT_FOUND);
    }


}

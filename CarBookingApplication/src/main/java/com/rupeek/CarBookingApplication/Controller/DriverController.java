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

@RestController
@RequestMapping("/driver")
public class DriverController {

    @Autowired(required = true)
    DriverService driverService;

    @PostMapping("/insert")
    public ResponseEntity<Admin> insertAdmin(@RequestBody Driver driver) {
        if (driver == null) {
            return new ResponseEntity("Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }
        driverService.create(driver);

        return new ResponseEntity("Succesfully Driver Intserted", HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Admin> updateAdmin(@RequestBody Driver driver) {

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
    public ResponseEntity<List<Driver>> viewBestDrivers(){
        List<Driver> driver=driverService.viewBestDriver();
        if(driver.isEmpty()){
            return new ResponseEntity("sorry No driver found",HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(driver,HttpStatus.OK);
    }

}

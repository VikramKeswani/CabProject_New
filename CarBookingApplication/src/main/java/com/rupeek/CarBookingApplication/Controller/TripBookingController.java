package com.rupeek.CarBookingApplication.Controller;

import com.rupeek.CarBookingApplication.entity.Admin;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.Driver;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import com.rupeek.CarBookingApplication.service.DriverService;
import com.rupeek.CarBookingApplication.service.TripBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tripbooking")
public class TripBookingController {
    @Autowired(required = true)
    TripBookingService tripBookingService;

    @PostMapping("/insert")
    public ResponseEntity<Admin> insertAdmin(@RequestBody TripBooking tripBooking) {
        if (tripBooking == null) {
            return new ResponseEntity("Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }
        tripBookingService.create(tripBooking);

        return new ResponseEntity("Succesfully Admin Intserted", HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Admin> updateAdmin(@RequestBody TripBooking tripBooking) {

        if (tripBooking == null) {
            return new ResponseEntity("Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        tripBookingService.create(tripBooking);
        return new ResponseEntity("Succesfully Admin Updated", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAdmin(@RequestParam Integer tripBookingId) {
        if (tripBookingId == null) {
            return new ResponseEntity<String>("Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        tripBookingService.delete(tripBookingId);
        return new ResponseEntity<String>("Succesfully Admin Deleted", HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<List<TripBooking>> viewAllTripsCustomer(Customer customerId){
        List<TripBooking> tripBooking = tripBookingService.viewAllTripCustomer(customerId);
        if (tripBooking.isEmpty()) {
            return new ResponseEntity("Sorry customer with that id have no trip", HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity(tripBooking, HttpStatus.OK);
    }





}

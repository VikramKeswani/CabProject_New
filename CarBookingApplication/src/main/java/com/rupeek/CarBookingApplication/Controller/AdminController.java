package com.rupeek.CarBookingApplication.Controller;

import com.rupeek.CarBookingApplication.entity.Admin;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import com.rupeek.CarBookingApplication.service.AdminService;
import com.rupeek.CarBookingApplication.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {


    @Autowired(required = true)
    AdminService adminService;

    //working
    @PostMapping("/insert")
    public ResponseEntity<Admin> insertAdmin(@RequestBody Admin admin){
        if(admin==null){
            return new ResponseEntity( "Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }
        adminService.create(admin);

        return new ResponseEntity("Succesfully Admin Intserted",HttpStatus.CREATED);
    }

    //working
    @PutMapping("/update")
    public ResponseEntity<Admin> updateAdmin(@ RequestBody Admin admin){

        if(admin==null){
            return new ResponseEntity( "Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        adminService.create(admin);
        return new ResponseEntity("Succesfully Admin Updated",HttpStatus.OK);
    }



    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAdmin(@RequestParam Integer adminId){
        if(adminId==null){
            return new ResponseEntity<String>( "Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }
        adminService.delete(adminId);
        return new ResponseEntity<String>("Succesfully Admin Deleted",HttpStatus.OK);
    }

    @GetMapping("/getalltrip")
    public List<TripBooking> getAllTrips(@RequestParam Integer customerId){
        return adminService.getAllTrips(customerId);
    }

    // cabwise and customerwise is missing here.


//    @GetMapping("/getCabDatewise")
//    public List<TripBooking> getAllTripDateWise(){
//        return adminService.getAllTripDateWise();
//    }
//
//    @GetMapping("/getAllTripForDays")
//    public List<TripBooking> getAllTripForDays(@RequestParam Integer customerId, @RequestParam Date fromDateTime, @RequestParam Date toDateTime){
//        return adminService.getAllTripForDays(customerId,fromDateTime,toDateTime);
//    }


}

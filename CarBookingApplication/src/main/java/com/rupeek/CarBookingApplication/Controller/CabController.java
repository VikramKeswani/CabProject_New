package com.rupeek.CarBookingApplication.Controller;

import com.rupeek.CarBookingApplication.entity.Admin;
import com.rupeek.CarBookingApplication.entity.Cab;
import com.rupeek.CarBookingApplication.service.AdminService;
import com.rupeek.CarBookingApplication.service.CabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cab")
public class CabController {
    @Autowired(required = true)
    CabService cabService;

    @PostMapping("/insert")
    public ResponseEntity<Admin> insertCab(@RequestBody Cab cab){
//        if(cab==null){
//            return new ResponseEntity( "Sorry No customer with that id", HttpStatus.NOT_FOUND);
//        }
        cabService.create(cab);
        return new ResponseEntity("Succesfully Admin Intserted",HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Admin> updateCab(@ RequestBody Cab cab){

        if(cab==null){
            return new ResponseEntity( "Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        cabService.create(cab);
        return new ResponseEntity("Succesfully Admin Updated",HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAdmin(@RequestParam Integer cabId){
        if(cabId==null){
            return new ResponseEntity<String>( "Sorry No customer with that id", HttpStatus.NOT_FOUND);
        }

        cabService.delete(cabId);
        return new ResponseEntity<String>("Succesfully Admin Deleted",HttpStatus.OK);
    }

    @GetMapping("/viewcabtype")
    public List<Cab> viewCabOfType(@RequestParam String carType){
        return cabService.getByCarType(carType);
    }

    @GetMapping("/countcabtype")
    public int countCabOfType(@RequestParam String carType){
        return cabService.countCabsOfType(carType);
    }

}

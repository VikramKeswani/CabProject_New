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


@CrossOrigin
@RestController
@RequestMapping("/cab")
public class CabController {
    @Autowired(required = true)
    CabService cabService;

    //working
    @PostMapping("/insert")
    public ResponseEntity<Cab> insertCab(@RequestBody Cab cab){
        if(cab==null){
            return new ResponseEntity("No User Exist", HttpStatus.NOT_FOUND);
        }
       Cab c = cabService.createM(cab);

        return new ResponseEntity(c ,HttpStatus.CREATED);
    }


    //working
    @PutMapping("/update")
    public ResponseEntity<Admin> updateCab(@ RequestBody Cab cab){

        if(cab==null){
            return new ResponseEntity( "Sorry No Cab with that id", HttpStatus.NOT_FOUND);
        }

        cabService.create(cab);
        return new ResponseEntity("Succesfully Cab Updated",HttpStatus.OK);
    }


    //working
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteAdmin(@RequestParam Integer cabId){
        if(cabId==null){
            return new ResponseEntity<String>( "Sorry No Cab with that id", HttpStatus.NOT_FOUND);
        }

        cabService.delete(cabId);
        return new ResponseEntity<String>("Succesfully Cab Deleted",HttpStatus.OK);
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

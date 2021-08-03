package com.rupeek.CarBookingApplication.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/driver")
public class DriverController {

    @GetMapping("/myaccount/personal_info")
    public ResponseEntity<String> getPersonInfo(){
        return null;
    }

    @GetMapping("/myaccount/previous_rides")
    public ResponseEntity<List<String>> getPreviousRides(){
        List<String> emptylst = Collections.emptyList();

        System.out.println("Created empty immutable list: "+emptylst);

        // try to add elements
        emptylst.add("A");
        emptylst.add("B");
        return (ResponseEntity<List<String>>) emptylst;
    }

    @GetMapping("/myaccount/wallet")
    public ResponseEntity<String> getWalletInfo(){
        return null;
    }

    @PostMapping("/myaccount/contactus")
    public String setContactUs(){
        return "Queries has been noted we will be contact u soon";
    }


}

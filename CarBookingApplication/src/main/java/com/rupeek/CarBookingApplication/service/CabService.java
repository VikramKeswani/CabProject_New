package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.CabRepository;
import com.rupeek.CarBookingApplication.entity.Cab;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("CabRepository")
public class CabService implements IService<Cab> {

    @Autowired
    private CabRepository cabRepository;


    @Override
    public void create(Cab cab) {
        cabRepository.save(cab);
    }

    @Override
    public Cab get(Integer id) {
        return null;
    }

    @Override
    public void update(Cab object) {
        cabRepository.save(object);
    }

    @Override
    public void delete(Integer id) {
         cabRepository.deleteById(id);
    }

    public List<Cab> getByCarType(String carType)
    {
        return cabRepository.getByCarType(carType);
    }

    public Integer countCabsOfType(String carType){
        return cabRepository.countCabsOfType(carType);
    }

}

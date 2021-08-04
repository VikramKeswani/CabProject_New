package com.rupeek.CarBookingApplication.service;


public interface IService<T> {
    public void create(T object);
    public T get(Integer id);
    void update(T object);
    void delete(Integer id);
}

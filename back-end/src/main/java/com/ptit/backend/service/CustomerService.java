package com.ptit.backend.service;

import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.repository.CustomerRepository;

import java.util.ArrayList;
import java.util.List;

public interface CustomerService {
    public CustomerEntity createCustomer(CustomerEntity user);
    public CustomerEntity updateCustomer(CustomerEntity user);
    public CustomerEntity getCustomer(String username);
    public List<CustomerEntity> getCustomerList();

}

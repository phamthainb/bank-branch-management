package com.ptit.backend.service;

import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.repository.CustomerRepository;
import com.ptit.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public CustomerEntity createCustomer(CustomerEntity user) {
        return customerRepository.save(user);
    }
//    public StaffEntity create(StaffEntity s) {
//        return staffRepository.save(s);
//    }
    @Override
    public CustomerEntity updateCustomer(CustomerEntity user) {
        return null;
    }

    @Override
    public CustomerEntity getCustomer(String username) {
        return null;
    }

    @Override
    public List<CustomerEntity> getCustomerList() {
        return null;
    }
}

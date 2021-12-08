package com.ptit.backend.service;

import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.repository.CustomerRepository;
import com.ptit.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
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
        return customerRepository.save(user);
    }

    @Override
    public CustomerEntity getCustomer(String username) {
        return null;
    }

    @Override
    public CustomerEntity getCustomerById(long id) {
        CustomerEntity customer = customerRepository.findById(id).orElse(null);
        if (customer == null) {
            throw ApiException.builder()
                    .message("Nurse with id = " + id + " not found!")
                    .httpStatus(HttpStatus.NOT_FOUND);
        }
        return customer;
    }

    @Override
    public Page<CustomerEntity> getCustomerList(Pageable pageable) {
        return null;
    }
    @Override
    public List<CustomerEntity> getCustomerCreatedByStaff(String idStaff) {
        return null;
    }
}

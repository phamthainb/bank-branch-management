package com.ptit.backend.service;

import com.ptit.backend.entity.AccountEntity;
import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.entity.UserEntity;
import com.ptit.backend.repository.CustomerRepository;
import com.ptit.backend.repository.StaffRepository;
import com.ptit.backend.repository.UserRepository;
import com.ptit.backend.utils.ApiResponse;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import java.util.List;

@Service
public class StaffServiceImpl implements StaffService{
    @Autowired
    StaffRepository staffRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public StaffEntity findByUsername(String username) {
        UserEntity user = userRepository.findByUsername(username);
        if(user != null){
            StaffEntity staffEntity = staffRepository.findByUser(user);
            return staffEntity;
        }
        return null;
    }

    @Override
    public StaffEntity create(StaffEntity s) {
        return staffRepository.save(s);
    }

    @Override
    public StaffEntity update(StaffEntity s) {
        return staffRepository.save(s);
    }

    @Override
    public StaffEntity findById(Long id) {
        return staffRepository.findById(id).orElse(null);
    }

    @Override
    public Page<StaffEntity> findAll(Pageable pageable) {
        return staffRepository.findAll(pageable);
    }

    @Override
    public Page<CustomerEntity> findCustomerCreated(Long staffId, Pageable pageable) {
        StaffEntity staff = staffRepository.findById(staffId).orElse(null);

        if(staff == null){
            throw ApiResponse.builder().status(HttpStatus.NOT_FOUND).message("Không tìm thấy Staff.").build();
        }

        Page<CustomerEntity> c = customerRepository.findCustomerByStaff(staffId, pageable);
        return c;
    }

}

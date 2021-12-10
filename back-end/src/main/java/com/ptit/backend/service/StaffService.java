package com.ptit.backend.service;

import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.entity.StaffEntity;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.List;

public interface StaffService {
    public  StaffEntity findByUsername(String username);

    public StaffEntity create(StaffEntity s);

    public StaffEntity update(StaffEntity s);

    public StaffEntity findById(Long id);

    public Page<StaffEntity> findAll(Pageable pageable);

    public Page<CustomerEntity> findCustomerCreated(Long staffId, Pageable pageable);
}

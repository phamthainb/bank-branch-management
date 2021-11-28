package com.ptit.backend.service;

import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import java.util.List;

@Service
public class StaffServiceImpl implements StaffService{
    @Autowired
    StaffRepository staffRepository;

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
    public List<StaffEntity> find(Pageable pageable) {
        return staffRepository.findAll(pageable).getContent();
    }

}

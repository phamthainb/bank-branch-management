package com.ptit.backend.service;

import com.ptit.backend.entity.StaffEntity;

import org.springframework.data.domain.Pageable;
import java.util.List;

public interface StaffService {
    public StaffEntity create(StaffEntity s);

    public StaffEntity update(StaffEntity s);

    public StaffEntity findById(Long id);

    public List<StaffEntity> find(Pageable pageable);
}

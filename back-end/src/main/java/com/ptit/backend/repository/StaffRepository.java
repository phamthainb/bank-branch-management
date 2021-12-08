package com.ptit.backend.repository;

import com.ptit.backend.entity.StaffEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<StaffEntity, Long> {
    public StaffEntity findByUser(UserEntity u);
}

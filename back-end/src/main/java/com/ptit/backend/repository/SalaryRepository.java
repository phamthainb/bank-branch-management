package com.ptit.backend.repository;

import com.ptit.backend.entity.SalaryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SalaryRepository extends JpaRepository<SalaryEntity, Long> {
}

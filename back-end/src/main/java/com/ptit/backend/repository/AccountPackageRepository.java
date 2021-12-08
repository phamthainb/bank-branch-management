package com.ptit.backend.repository;

import com.ptit.backend.entity.AccountPackageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountPackageRepository extends JpaRepository<AccountPackageEntity, Long> {
}

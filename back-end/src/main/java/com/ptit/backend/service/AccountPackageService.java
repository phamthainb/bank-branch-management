package com.ptit.backend.service;

import com.ptit.backend.entity.AccountPackageEntity;

import java.util.ArrayList;
import java.util.List;

public interface AccountPackageService {
    public List<AccountPackageEntity> findAll();

    public AccountPackageEntity create(AccountPackageEntity accountPackageEntity);

    public AccountPackageEntity update(AccountPackageEntity accountPackageEntity);

    public boolean delete(Long id);
}

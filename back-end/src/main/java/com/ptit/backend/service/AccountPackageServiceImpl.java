package com.ptit.backend.service;

import com.ptit.backend.entity.AccountPackageEntity;
import com.ptit.backend.repository.AccountPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountPackageServiceImpl implements AccountPackageService{
    @Autowired
    AccountPackageRepository accountPackageRepository;

    @Override
    public List<AccountPackageEntity> findAll() {
        return accountPackageRepository.findAll();
    }

    @Override
    public AccountPackageEntity create(AccountPackageEntity accountPackageEntity) {
        return accountPackageRepository.save(accountPackageEntity);
    }

    @Override
    public AccountPackageEntity update(AccountPackageEntity accountPackageEntity) {
        AccountPackageEntity a = accountPackageRepository.getById(accountPackageEntity.getId());
        if(a != null){
            accountPackageRepository.save(accountPackageEntity);
        }
        return null;
    }

    @Override
    public boolean delete(Long id) {
        AccountPackageEntity a = accountPackageRepository.getById(id);
        if(a != null){
            accountPackageRepository.delete(a);
            return true;
        }
        return false;
    }
}

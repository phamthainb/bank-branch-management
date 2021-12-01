package com.ptit.backend.service;

import com.ptit.backend.dto.CreateAccountDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.entity.AccountEntity;
import com.ptit.backend.entity.AccountPackageEntity;
import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    StaffRepository staffRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    AccountPackageRepository accountPackageRepository;


    @Override
    public AccountEntity create(CreateAccountDto data) {
        // check exist id
        CustomerEntity customer = customerRepository.findById(data.getId_customer()).orElse(null);
        AccountPackageEntity accountPackage = accountPackageRepository.findById(data.getId_package()).orElse(null);
        // get staff
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        StaffEntity staffEntity = staffRepository.findById(myUserDetails.getUser().getId()).orElse(null);

        if(customer != null && accountPackage != null && staffEntity != null){

            AccountEntity accountEntity = new AccountEntity();
            accountEntity.setAccountPackageEntity(accountPackage);
            accountEntity.setCustomer(customer);
            accountEntity.setStaff(staffEntity);
            // gen code account
            accountEntity.setCode(data.getCode());

          return accountRepository.save(accountEntity);
        }

        return null;
    }

    @Override
    public AccountEntity update(AccountEntity accountEntity) {
        return null;
    }

    @Override
    public AccountEntity findOne(Long accountId) {
        return null;
    }

    @Override
    public ArrayList<AccountEntity> getList(Long customerId) {
        return null;
    }
}

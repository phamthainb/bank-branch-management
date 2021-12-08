package com.ptit.backend.service;

import com.ptit.backend.dto.CreateAccountDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.entity.*;
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
    StaffService staffService;

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
        UserEntity user = myUserDetails.getUser();

        if(customer != null && accountPackage != null && user != null){
            StaffEntity staffEntity = staffService.findByUsername(user.getUsername());

            AccountEntity accountEntity = new AccountEntity();
            accountEntity.setAccountPackageEntity(accountPackage);
            accountEntity.setCustomer(customer);
            accountEntity.setStaff(staffEntity);
            // set code
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

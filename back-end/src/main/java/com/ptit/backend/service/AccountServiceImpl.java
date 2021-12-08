package com.ptit.backend.service;

import com.ptit.backend.dto.CreateAccountDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.entity.*;
import com.ptit.backend.repository.*;
import com.ptit.backend.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

        // get staff
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        UserEntity user = myUserDetails.getUser();

        // check code is duplicate
        AccountEntity a = accountRepository.findByCode(data.getCode());
        if(a != null){
            throw ApiResponse.builder().status(HttpStatus.CONFLICT).message("Mã tài khoản không hợp lệ").build();
        }

        if(customer != null && user != null){
            StaffEntity staffEntity = staffService.findByUsername(user.getUsername());

            AccountEntity accountEntity = new AccountEntity();
            accountEntity.setCustomer(customer);
            accountEntity.setStaff(staffEntity);
            accountEntity.setStatus(true);
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

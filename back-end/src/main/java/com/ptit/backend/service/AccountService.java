package com.ptit.backend.service;

import com.ptit.backend.dto.CreateAccountDto;
import com.ptit.backend.entity.AccountEntity;

import java.util.ArrayList;

public interface AccountService {
    public AccountEntity create(CreateAccountDto data);

    public AccountEntity update(AccountEntity accountEntity);

    // detail information of an account
    public AccountEntity findOne(Long accountId);

    // get list account of an Customer
    public ArrayList<AccountEntity> getList(Long customerId);
}

package com.ptit.backend.service;

import com.ptit.backend.entity.CustomerEntity;

public interface TransactionService {
    // check customer is owner of account
    public Boolean validateCustomer(CustomerEntity customer);

}

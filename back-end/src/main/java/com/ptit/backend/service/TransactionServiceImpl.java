package com.ptit.backend.service;

import com.ptit.backend.entity.CustomerEntity;
import org.springframework.stereotype.Service;

@Service
public class TransactionServiceImpl implements TransactionService{
    @Override
    public Boolean validateCustomer(CustomerEntity customer) {
        return null;
    }
}

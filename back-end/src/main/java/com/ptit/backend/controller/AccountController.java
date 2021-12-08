package com.ptit.backend.controller;

import com.ptit.backend.dto.CreateAccountDto;
import com.ptit.backend.entity.AccountEntity;
import com.ptit.backend.entity.ResponseObject;
import com.ptit.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    AccountService accountService;

    @PostMapping
    public ResponseObject createAccount(@RequestBody CreateAccountDto data){
        AccountEntity accountEntity = accountService.create(data);
        if(accountEntity != null){
            return ResponseObject.builder().status(HttpStatus.OK).message("Tạo thành công.").data(accountEntity).build();
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Thất bại.").build();
    }
}

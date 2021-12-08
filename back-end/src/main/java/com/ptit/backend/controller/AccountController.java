package com.ptit.backend.controller;

import com.ptit.backend.dto.CreateAccountDto;
import com.ptit.backend.dto.RechargeDto;
import com.ptit.backend.entity.AccountEntity;
import com.ptit.backend.utils.ResponseObject;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.service.AccountService;
import com.ptit.backend.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    AccountService accountService;

    @Autowired
    SalaryService salaryService;

    @PostMapping
    public ResponseObject createAccount(@RequestBody CreateAccountDto data){
        AccountEntity accountEntity = accountService.create(data);
        if(accountEntity != null){
            // +500 for staff
            StaffEntity staffEntity = accountEntity.getStaff();
            salaryService.createFirstTime(staffEntity, accountEntity);

            return ResponseObject.builder().status(HttpStatus.OK).message("Tạo thành công.").data(accountEntity).build();
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Thất bại.").build();
    }

    @PostMapping(value = "/recharge")
    public ResponseObject recharge(@RequestBody RechargeDto data){
        Long id = data.getAccount().getId();
        AccountEntity account = accountService.findOne(id);

        if(account != null){
            float n = account.getBalance() + data.getAmount();
            account.setBalance(n);
            accountService.update(account);
            return ResponseObject.builder().status(HttpStatus.OK).message("Nạp tiền thành công.").build();
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Thất bại.").build();
    }

    @PostMapping(value = "/pay")
    public ResponseObject pay(){

        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Thất bại.").build();
    }
}

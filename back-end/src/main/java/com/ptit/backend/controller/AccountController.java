package com.ptit.backend.controller;

import com.ptit.backend.dto.*;
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
        boolean res = accountService.recharge(data);
        if(res){
            return ResponseObject.builder().status(HttpStatus.OK).message("Nạp tiền thành công.").build();
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Nạp tiền thất bại.").build();
    }

    @PostMapping(value = "/register-package")
    public ResponseObject registerPackage(@RequestBody RegisterPackageDto data){
        boolean res = accountService.registerPackage(data);
        if(res){
            return ResponseObject.builder().status(HttpStatus.OK).message("Gửi tiết kiệm thành công.").build();
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Gửi tiết kiệm thất bại.").build();
    }

    @PostMapping(value = "/recharge-package")
    public ResponseObject rechargePackge(@RequestBody RechargePackageDto data){
        boolean res = accountService.rechargePackage(data);
        if(res){
            return ResponseObject.builder().status(HttpStatus.OK).message("Nạp tiết kiệm thành công.").build();
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Nạp tiền thất bại.").build();
    }

    @PostMapping(value = "/pay")
    public ResponseObject pay(@RequestBody PayDto data){
        boolean res = accountService.pay(data);
        if(res){
            return ResponseObject.builder().status(HttpStatus.OK).message("Chuyển tiền thành công.").build();
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Chuyển tiền thất bại.").build();
    }
}

package com.ptit.backend.controller;

import com.ptit.backend.entity.AccountPackageEntity;
import com.ptit.backend.entity.ResponseObject;
import com.ptit.backend.service.AccountPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account_package")
public class AccountPackageController {
    @Autowired
    AccountPackageService accountPackageService;

    @PostMapping(name = "")
    public ResponseObject create(@RequestBody AccountPackageEntity accountPackageEntity){
        //System.out.println(accountPackageEntity.toString());
        if(accountPackageEntity.getType().equals(AccountPackageEntity.typePackage.payment) ||
                accountPackageEntity.getType().equals(AccountPackageEntity.typePackage.saving)){

            AccountPackageEntity a = accountPackageService.create(accountPackageEntity);
            if(a != null){
                return ResponseObject.builder().status(HttpStatus.OK).message("Tạo thành công.").data(a).build();
            }
        }
        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Loại tài khoản k đúng.").build();
    }

    @GetMapping(name = "")
    public ResponseObject get(){
        List<AccountPackageEntity> list = accountPackageService.findAll();
        return ResponseObject.builder().status(HttpStatus.OK).message("").data(list).build();
    }
}

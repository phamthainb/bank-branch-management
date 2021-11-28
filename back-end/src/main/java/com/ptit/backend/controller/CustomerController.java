package com.ptit.backend.controller;

import com.ptit.backend.entity.ResponseObject;
import com.ptit.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping(value = "")
    public ResponseObject createCustomer(){

        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Tạo Khách hàng thất bại.").build();
    }
}

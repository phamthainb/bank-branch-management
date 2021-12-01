package com.ptit.backend.controller;

import com.ptit.backend.dto.CreateCustomerDto;
import com.ptit.backend.dto.CreateStaffDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.entity.ResponseObject;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.entity.UserEntity;
import com.ptit.backend.repository.StaffRepository;
import com.ptit.backend.service.CustomerService;
import com.ptit.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @Autowired
    StaffRepository staffRepository;

    @Autowired
    UserService userService;

    @PostMapping(value = "")
    public ResponseObject createCustomer(@RequestBody CreateCustomerDto createCustomerDto){
        // validate
        UserEntity oldStaff = userService.findUser(createCustomerDto.getUsername());
        if(oldStaff != null){
            return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Username đã được sử sụng.").build();
        }

        // check who create
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        CustomerEntity customerEntity = new CustomerEntity();
        customerEntity.setAddress(createCustomerDto.getAddress());
        customerEntity.setBirthday(createCustomerDto.getBirthday());
        customerEntity.setCard_id(createCustomerDto.getCard_id());
        customerEntity.setName(createCustomerDto.getName());
        customerEntity.setStatus(createCustomerDto.getStatus());

        UserEntity user = myUserDetails.getUser();
        StaffEntity staffEntity = staffRepository.findById(user.getId()).orElse(null);

        if(staffEntity != null){
            customerEntity.setStaff(staffEntity);
            UserEntity userEntity = new UserEntity();
            userEntity.setUsername(createCustomerDto.getUsername());
            userEntity.setPassword(createCustomerDto.getPassword());
            userEntity.setRole(UserEntity.Roles.CUSTOMER);

            customerEntity.setUser(userEntity);
            CustomerEntity newCustomer = customerService.createCustomer(customerEntity);
            if(newCustomer != null){
                return ResponseObject.builder().status(HttpStatus.CREATED).message("Tạo nhân viên thành công.").data(newCustomer).build();
            }
        }

        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Tạo Khách hàng thất bại.").build();


    }
}

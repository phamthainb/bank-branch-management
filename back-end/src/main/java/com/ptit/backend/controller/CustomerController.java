package com.ptit.backend.controller;

import com.ptit.backend.dto.CreateCustomerDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.entity.CustomerEntity;
import com.ptit.backend.utils.ResponseObject;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.entity.UserEntity;
import com.ptit.backend.repository.StaffRepository;
import com.ptit.backend.service.CustomerService;
import com.ptit.backend.service.StaffService;
import com.ptit.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @Autowired
    StaffRepository staffRepository;

    @Autowired
    UserService userService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    StaffService staffService;

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
        UserEntity userEntityStaff = userService.findUser(user.getUsername());

        if(userEntityStaff != null){
            StaffEntity staffEntity = staffService.findByUsername(userEntityStaff.getUsername());
            customerEntity.setStaff(staffEntity);
            UserEntity userEntity = new UserEntity();
            userEntity.setUsername(createCustomerDto.getUsername());
            userEntity.setPassword(bCryptPasswordEncoder.encode(createCustomerDto.getPassword()));
            userEntity.setRole(UserEntity.Roles.CUSTOMER);

            customerEntity.setUser(userEntity);
            CustomerEntity newCustomer = customerService.createCustomer(customerEntity);
            if(newCustomer != null){
                return ResponseObject.builder().status(HttpStatus.CREATED).message("Tạo Khách hàng thành công.").data(newCustomer).build();
            }
        }

        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Tạo Khách hàng thất bại.").build();


    }

    @GetMapping(params = {"page", "size"})
    public ResponseEntity<Page<CustomerEntity>> getCustomerList(@RequestParam int page, @RequestParam int size) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(customerService.getCustomerList(pageable));
    }

    @PutMapping(params = "id")
    public ResponseEntity<CustomerEntity> updateCustomer(@RequestBody CustomerEntity customer) {
        return ResponseEntity.ok(customerService.updateCustomer(customer));
    }

    @GetMapping(params = "id")
    public ResponseEntity<CustomerEntity> getCustomer(@RequestParam Long id) {
        return ResponseEntity.ok(customerService.findById(id));
    }
}

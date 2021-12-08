package com.ptit.backend.controller;

import com.ptit.backend.dto.CreateStaffDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.entity.AdminEntity;
import com.ptit.backend.utils.ResponseObject;
import com.ptit.backend.entity.StaffEntity;
import com.ptit.backend.entity.UserEntity;
import com.ptit.backend.service.StaffService;
import com.ptit.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/staff")
public class StaffController {

    @Autowired
    StaffService staffService;

    @Autowired
    UserService userService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping(value = "")
    public ResponseObject createStaff(@RequestBody CreateStaffDto createStaffDto){
        // validate
        UserEntity oldStaff = userService.findUser(createStaffDto.getUsername());
        if(oldStaff != null){
            return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Username đã được sử sụng.").build();
        }

        // check who create
        MyUserDetails myUserDetails = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        StaffEntity staffEntity = new StaffEntity();
        staffEntity.setAddress(createStaffDto.getAddress());
        staffEntity.setBirthday(createStaffDto.getBirthday());
        staffEntity.setCard_id(createStaffDto.getCard_id());
        staffEntity.setName(createStaffDto.getName());
        staffEntity.setExpYear(createStaffDto.getExp_year());
        staffEntity.setRate(createStaffDto.getRate());
        staffEntity.setPosition(createStaffDto.getPosition());

        AdminEntity adminEntity = new AdminEntity();
        adminEntity.setUser(myUserDetails.getUser());

        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(createStaffDto.getUsername());
        userEntity.setPassword(bCryptPasswordEncoder.encode(createStaffDto.getPassword()));
        userEntity.setRole(UserEntity.Roles.STAFF);

        staffEntity.setAdmin(adminEntity);
        staffEntity.setUser(userEntity);
        StaffEntity newStaff = staffService.create(staffEntity);

        if(newStaff != null){
            return ResponseObject.builder().status(HttpStatus.CREATED).message("Tạo nhân viên thành công.").data(newStaff).build();
        }

        return ResponseObject.builder().status(HttpStatus.NOT_IMPLEMENTED).message("Tạo nhân viên thất bại.").build();
    }

}

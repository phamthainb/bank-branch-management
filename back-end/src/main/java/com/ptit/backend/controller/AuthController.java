package com.ptit.backend.controller;

import com.ptit.backend.dto.LoginDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.dto.SignupDto;
import com.ptit.backend.entity.ResponseObject;
import com.ptit.backend.entity.UserEntity;
import com.ptit.backend.service.UserService;
import com.ptit.backend.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping(value = "/login")
    public ResponseObject login(@RequestBody LoginDto request) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        }
        catch (Exception e) {
            e.printStackTrace();
            return ResponseObject.builder().message("Thông tin tài khoản không chính xác.").status(HttpStatus.OK).build();
        }

        MyUserDetails myUserDetails = (MyUserDetails) userService.loadUserByUsername(request.getUsername());
        String jwt = JwtUtils.generateToken(myUserDetails);

        return ResponseObject.builder().message("Đăng nhập thành công.").status(HttpStatus.OK).data(jwt).build();
    }

    @PostMapping(value = "/register")
    public ResponseObject signup(@RequestBody SignupDto signup) {
        // check mapping pass
        if(!signup.getPassword1().equals(signup.getPassword2())){
            return ResponseObject.builder().message("Mật khẩu không khớp.").status(HttpStatus.NOT_IMPLEMENTED).build();
        }

        // check username exist
        UserEntity checkExist = userService.findUser(signup.getUsername());

        if(checkExist != null){
            return ResponseObject.builder().message("Username đã tồn tại.").status(HttpStatus.CONFLICT).build();
        }
        // check roles type
//        if(!signup.getRoles().equals(UserEntity.Roles.CUSTOMER)){
//            return ResponseObject.builder().message("Loại tài khoản không chính xác.").status(HttpStatus.NOT_IMPLEMENTED).data(null).build();
//        }
        // save on db
        UserEntity newUser = new UserEntity();
        newUser.setUsername(signup.getUsername());
        newUser.setPassword(bCryptPasswordEncoder.encode(signup.getPassword1()));
        newUser.setRole(signup.getRoles());

        UserEntity res = userService.create(newUser);

        if(res.getId() != null){
            return ResponseObject.builder().message("Đăng ký tài khoản thành công.").status(HttpStatus.OK).build();
        }

        return ResponseObject.builder().message("Có lỗi xảy ra.").status(HttpStatus.BAD_REQUEST).build();
    }
}

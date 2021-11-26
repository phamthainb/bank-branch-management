package com.ptit.backend.controller;

import com.ptit.backend.dto.LoginDto;
import com.ptit.backend.dto.MyUserDetails;
import com.ptit.backend.dto.SignupDto;
import com.ptit.backend.entity.ResponseObject;
import com.ptit.backend.entity.UserEntity;
import com.ptit.backend.service.UserService;
import com.ptit.backend.utils.JwtUtils;
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
    private AuthenticationManager authenticationManager;
    private UserService userService;

    BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto request) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        }
        catch (BadCredentialsException e) {
            throw new BadCredentialsException("Thông tin tài khoản không chính xác " + request.getUsername());
        }
        MyUserDetails myUserDetails = (MyUserDetails) userService.loadUserByUsername(request.getUsername());
        String jwt = JwtUtils.generateToken(myUserDetails);
        return ResponseEntity.ok(jwt);
    }

    @PostMapping(value = "/register")
    public ResponseObject signup(@RequestBody SignupDto signup) {
        // check mapping pass
        if(!signup.getPassword1().equals(signup.getPassword2())){
            return ResponseObject.builder().message("Mật khẩu không khớp.").status(HttpStatus.NOT_IMPLEMENTED).data(null).build();
        }

        // check username exist
        UserEntity checkExist = userService.findUser(signup.getUsername());

        if(checkExist != null){
            return ResponseObject.builder().message("Username đã tồn tại.").status(HttpStatus.OK).data(null).build();
        }

        UserEntity newUser = new UserEntity();
        newUser.setUsername(signup.getUsername());
        newUser.setPassword(bCryptPasswordEncoder.encode(signup.getPassword1()));
        UserEntity res = userService.create(newUser);

        if(res.getId() != null){
            return ResponseObject.builder().message("Đăng ký tài khoản thành công.").status(HttpStatus.OK).data(res).build();
        }

        return null;
    }
}

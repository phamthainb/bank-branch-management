package com.ptit.backend.entity;

import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
public class ApiResponse extends RuntimeException {
    private HttpStatus status;
    private String message;
}

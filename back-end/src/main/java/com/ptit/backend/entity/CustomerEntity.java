package com.ptit.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "customers")
@NoArgsConstructor
@Data
public class CustomerEntity extends BaseEntity{
    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "card_id")
    private String card_id;

    @Column(name = "birthday")
    private String birthday;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;
}

package com.ptit.backend.entity;


import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "admins")
@NoArgsConstructor
@Getter
@Setter
public class AdminEntity extends BaseEntity {
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

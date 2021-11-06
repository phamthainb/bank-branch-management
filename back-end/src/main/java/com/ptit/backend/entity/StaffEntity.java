package com.ptit.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "staffs")
@NoArgsConstructor
@Getter
@Setter
public class StaffEntity extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "id_admin")
    private AdminEntity admin;

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

    @Column(name = "rate")
    private String rate;

    @Column(name = "exp_years")
    private int expYear;

    @Column(name = "position")
    private String position;
}

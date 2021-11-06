package com.ptit.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "accounts")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountEntity extends BaseEntity{

    @Column(name = "code")
    private String code;

    @ManyToOne
    @JoinColumn(name = "id_staff")
    private StaffEntity staff;

    @ManyToOne
    @JoinColumn(name = "id_customer")
    private CustomerEntity customer;
}

package com.ptit.backend.entity;

import lombok.AllArgsConstructor;
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
    private String code; // auto gen

    @Column(name="balance")
    private float balance;

    @ManyToOne
    @JoinColumn(name = "id_staff")
    private StaffEntity staff;

    @ManyToOne
    @JoinColumn(name = "id_customer")
    private CustomerEntity customer;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_account_package", referencedColumnName = "id")
    private AccountPackageEntity accountPackageEntity;

}

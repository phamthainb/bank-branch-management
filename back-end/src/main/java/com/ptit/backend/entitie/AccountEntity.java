package com.ptit.backend.entitie;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "accounts")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountEntity extends UserEntity{

    @Column(name = "code")
    private String code;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private CustomerEntity customer;

}

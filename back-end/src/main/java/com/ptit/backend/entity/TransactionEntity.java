package com.ptit.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "transactions")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TransactionEntity extends BaseEntity{

    @Column(name = "amount")
    private Float amount;

    @Column(name = "type")
    private String type; // in, out

    @ManyToOne
    @JoinColumn(name = "id_account_from")
    private AccountEntity account_in;

    @ManyToOne
    @JoinColumn(name = "id_account_to")
    private AccountEntity account_out;

}

package com.ptit.backend.entitie;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "transactions")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TransactionEntity extends BaseEntity{

    @Column(name = "amount")
    private Float amount;

    @Column(name = "type")
    private String type;


}

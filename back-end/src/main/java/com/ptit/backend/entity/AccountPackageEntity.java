package com.ptit.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "account_package")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountPackageEntity extends BaseEntity {

    public final class typePackage {
        public static final String saving = "saving";
        public static final String payment = "payment";
    };

    @Column(name = "name")
    String name;

    @Column(name = "type")
    String type;

    @Column(name = "minBalance")
    float minBalance;

    @Column(name = "apr")
    float apr;
}

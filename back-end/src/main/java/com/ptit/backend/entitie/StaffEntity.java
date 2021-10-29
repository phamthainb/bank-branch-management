package com.ptit.backend.entitie;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "staffs")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class StaffEntity extends UserEntity{

    @Column(name = "rank")
    private String rank;

    @Column(name = "exp_year")
    private int exp_year;

    @Column(name = "position")
    private String position;
}

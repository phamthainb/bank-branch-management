package com.ptit.backend.entitie;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "salaries")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SalaryEntity extends BaseEntity{

    @Column(name = "amount")
    private float amount;

    @ManyToOne
    @JoinColumn(name = "id_staff")
    private StaffEntity staff;
}

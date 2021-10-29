package com.ptit.backend.entitie;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "admins")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdminEntity extends UserEntity{
}

package com.dailycodebuffer.employee.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;

@Entity
@Data
@Table(name="employees")
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}

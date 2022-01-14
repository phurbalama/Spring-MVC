package com.phurbalama.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.phurbalama.springboot.model.Account;
import com.phurbalama.springboot.model.Employee;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

}

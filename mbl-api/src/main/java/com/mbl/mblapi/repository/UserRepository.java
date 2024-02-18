package com.mbl.mblapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mbl.mblapi.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}

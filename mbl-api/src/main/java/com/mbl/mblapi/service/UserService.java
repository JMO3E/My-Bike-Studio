package com.mbl.mblapi.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mbl.mblapi.model.User;
import com.mbl.mblapi.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUserById(int id){
        return userRepository.findById(id).get();
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public User updateUser(User user, int id){

        User userUpdate = userRepository.findById(id).get();

        if (Objects.nonNull(user.getFirstname()) && !"".equalsIgnoreCase(user.getFirstname())) {
            userUpdate.setFirstname(user.getFirstname());
        }
 
        if (Objects.nonNull(user.getLastname()) && !"".equalsIgnoreCase(user.getLastname())) {
            userUpdate.setLastname(user.getLastname());
        }
 
        if (Objects.nonNull(user.getEmail()) && !"".equalsIgnoreCase(user.getEmail())) {
            userUpdate.setEmail(user.getEmail());
        }

        return userRepository.save(userUpdate);
    } 

    public void deleteUser(int userId){
        userRepository.deleteById(userId);
    } 
}

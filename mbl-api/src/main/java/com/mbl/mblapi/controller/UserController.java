package com.mbl.mblapi.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.mbl.mblapi.model.User;
import com.mbl.mblapi.repository.UserRepository;
import com.mbl.mblapi.service.UserService;

import java.util.List;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("users")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("users/{userid}")
    public User getUserById(@PathVariable("userid") int userid) {
        return userService.getUserById(userid);
    }

    @PostMapping("users/add")
    public int addUser(@RequestBody User user) {
        userService.addUser(user);
        return user.getId();
    }

    @PutMapping("users/update/{userid}")
    public User updateUser(@RequestBody User user, @PathVariable("userid") int userid) {
        userService.updateUser(user, userid);
        return user;
    }

    @DeleteMapping("users/delete/{userid}")
    public void deleteUser(@PathVariable("userid") int userid) {
        userService.deleteUser(userid);
    }
    
}

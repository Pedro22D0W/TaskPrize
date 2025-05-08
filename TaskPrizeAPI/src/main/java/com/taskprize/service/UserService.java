package com.taskprize.service;
import com.taskprize.model.User;
import com.taskprize.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long userId, User userDetails) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setBalance(userDetails.getBalance());
        return userRepository.save(user);
    }

    public User updateUserBalance(Long userId, Integer payment) {
        System.out.println("pagamento:");
        System.out.println(payment);
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        user.setBalance(user.getBalance() + payment);
        return userRepository.save(user);
    }



    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
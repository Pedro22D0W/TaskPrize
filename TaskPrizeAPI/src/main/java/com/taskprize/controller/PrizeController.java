package com.taskprize.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskprize.dto.PrizeRequestDTO;
import com.taskprize.model.Prize;
import com.taskprize.model.User;
import com.taskprize.repository.PrizeRepository;
import com.taskprize.repository.UserRepository;
import com.taskprize.security.TokenService;
import com.taskprize.service.TaskService;
import com.taskprize.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/prizes")
public class PrizeController {
      @Autowired
    private TaskService taskService;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private PrizeRepository prizeRepository;

    // Criar uma nova tarefa
    @PostMapping
    public Prize createPrize(@RequestBody PrizeRequestDTO prize,HttpServletRequest request) {
        Long userId = tokenService.rescueUserId(request);
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        Prize newPrize = new Prize(prize, user);
        prizeRepository.save(newPrize);
        return newPrize;

    }

    
    @GetMapping("/{prize_id}")
    public ResponseEntity<Prize> getPrizeById(@PathVariable Long prize_id) {
        return prizeRepository.findById(prize_id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Atualizar uma tarefa
    @PutMapping("/{prize_id}")
    public ResponseEntity<Void> updateTask(@PathVariable Long prize_id, @RequestBody Prize prizeDetails) {
        Prize prize = prizeRepository.findById(prize_id)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        prize.setTitle(prizeDetails.getTitle());
        prize.setDescription(prizeDetails.getDescription());
        prize.setCost(prizeDetails.getCost());
        prizeRepository.save(prize);
        return ResponseEntity.ok().build();
    }
    // Deletar uma tarefa
    @DeleteMapping("/{prize_id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long prize_id) {
        prizeRepository.deleteById(prize_id);
        return ResponseEntity.noContent().build();
    }
}

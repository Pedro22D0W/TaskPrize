package com.taskprize.controller;

import com.taskprize.dto.TaskRequestDTO;
import com.taskprize.model.Task;
import com.taskprize.model.User;
import com.taskprize.repository.UserRepository;
import com.taskprize.security.TokenService;
import com.taskprize.service.TaskService;


import jakarta.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private UserRepository userRepository;

    // Criar uma nova tarefa
    @PostMapping
    public Task createTask(@RequestBody TaskRequestDTO task,HttpServletRequest request) {
        Long userId = tokenService.rescueUserId(request);
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        Task newTask = new Task(task, user);
        return taskService.createTask(newTask);
    }

    // Obter uma tarefa pelo ID
    @GetMapping("/{taskId}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long taskId) {
        return taskService.getTaskById(taskId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Atualizar uma tarefa
    @PutMapping("/{taskId}")
    public ResponseEntity<Task> updateTask(@PathVariable Long taskId, @RequestBody Task taskDetails) {
        Task updatedTask = taskService.updateTask(taskId, taskDetails);
        return ResponseEntity.ok(updatedTask);
    }

    // Deletar uma tarefa
    @DeleteMapping("/{taskId}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
        return ResponseEntity.noContent().build();
    }

    // Obter todas as tarefas de um usuário
    @GetMapping("/user-tasks")

    public List<Task> getTasksByUserId(HttpServletRequest request) {
        Long userId = tokenService.rescueUserId(request);
        return taskService.getTasksByUserId(userId);
    }
}
package com.taskprize.controller;

import com.taskprize.dto.TaskEditRequestDTO;
import com.taskprize.dto.TaskRequestDTO;
import com.taskprize.model.Prize;
import com.taskprize.model.Task;
import com.taskprize.model.User;
import com.taskprize.repository.TaskRepository;
import com.taskprize.repository.UserRepository;
import com.taskprize.security.TokenService;
import com.taskprize.service.TaskService;
import com.taskprize.service.UserService;

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
    @Autowired
    private UserService userService;
    @Autowired
    private TaskRepository taskRepository;

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

    
   
    @PutMapping("updateProgress/{taskId}")
    public ResponseEntity<Task> updateTaskProgress(HttpServletRequest request,@PathVariable Long taskId) {
        Task updatedTask = taskService.updateTaskProgress(taskId);
        
        if (updatedTask.getProgress() == updatedTask.getCurrent_progress()) {
            Long userId = tokenService.rescueUserId(request);
            System.out.println(userId);
            userService.updateUserBalance(userId,updatedTask.getPayment());
            updatedTask.setStatus(true);
            taskRepository.save(updatedTask);

        }
        return ResponseEntity.ok(updatedTask);
    }
    @PutMapping("/{taskId}")
    public ResponseEntity<Void> updatePrize(@PathVariable Long taskId, @RequestBody  TaskEditRequestDTO taskDetails) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setTitle(taskDetails.title());
        task.setCurrent_progress(taskDetails.current_progress());
        task.setProgress(taskDetails.progress());
        task.setDescription(taskDetails.description());
        task.setPayment(taskDetails.payment());
        taskRepository.save(task);
        return ResponseEntity.ok().build();
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
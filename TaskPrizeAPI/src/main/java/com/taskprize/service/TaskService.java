package com.taskprize.service;

import com.taskprize.model.Task;
import com.taskprize.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Criar uma tarefa
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    // Obter uma tarefa pelo ID
    public Optional<Task> getTaskById(Long taskId) {
        return taskRepository.findById(taskId);
    }

    // Atualizar uma tarefa
    public Task updateTask(Long taskId, Task taskDetails) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setProgress(taskDetails.getProgress());
        task.setPayment(taskDetails.getPayment());
        task.setStatus(taskDetails.getStatus());
        return taskRepository.save(task);
    }

    // Deletar uma tarefa
    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    // Obter todas as tarefas de um usuário
    public List<Task> getTasksByUserId(Long userId) {
        return taskRepository.findByUserUserId(userId);
    }
}
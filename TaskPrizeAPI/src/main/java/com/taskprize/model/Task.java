package com.taskprize.model;
import com.taskprize.dto.TaskRequestDTO;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long taskId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "progress", nullable = false)
    private Integer progress;

    @Column(name = "current_progress", nullable = false)
    private Integer current_progress;

    @Column(name = "payment", nullable = false)
    private Integer payment;

    @Column(name = "status", nullable = false)
    private Boolean status;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Task() {}

    public Task(TaskRequestDTO taskRequestDTO, User user){
        this.title = taskRequestDTO.title();
        this.description = taskRequestDTO.description();
        this.progress = taskRequestDTO.progress();
        this.current_progress = 0;
        this.payment = taskRequestDTO.payment();
        this.status = taskRequestDTO.status();
        this.user = user;
    }
    
}


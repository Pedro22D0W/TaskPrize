package com.taskprize.model;
import com.taskprize.dto.PrizeRequestDTO;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "prizes")

public class Prize {
    public Prize(PrizeRequestDTO prizeRequestDTO, User user) {
        this.title = prizeRequestDTO.title();
        this.description = prizeRequestDTO.description();
        this.cost = prizeRequestDTO.cost();
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "prize_id")
    private Long prize_id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "cost", nullable = false)
    private Integer cost;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

}

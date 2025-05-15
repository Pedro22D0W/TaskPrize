package com.taskprize.dto;

public record TaskEditRequestDTO(String title,String description,Integer progress,Integer current_progress,Integer payment) {

}

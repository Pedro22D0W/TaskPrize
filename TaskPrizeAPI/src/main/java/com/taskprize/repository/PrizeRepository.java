package com.taskprize.repository;
import com.taskprize.model.Prize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PrizeRepository extends JpaRepository<Prize, Long> {
    List<Prize> findByUserUserId(Long userId);
}

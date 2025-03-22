package com.taskprize.seeder;

import com.taskprize.model.User;
import com.taskprize.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserSeeder implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // Verifica se já existem usuários no banco de dados
        if (userRepository.count() == 0) {
            // Cria alguns usuários de exemplo
            User user1 = new User();
            user1.setName("João Silva");
            user1.setEmail("joao.silva@example.com");
            user1.setPassword("senha123");
            user1.setBalance(1000);

            User user2 = new User();
            user2.setName("Maria Oliveira");
            user2.setEmail("maria.oliveira@example.com");
            user2.setPassword("senha456");
            user2.setBalance(2000);

            User user3 = new User();
            user3.setName("Carlos Souza");
            user3.setEmail("carlos.souza@example.com");
            user3.setPassword("senha789");
            user3.setBalance(1500);

            // Salva os usuários no banco de dados
            userRepository.save(user1);
            userRepository.save(user2);
            userRepository.save(user3);

            System.out.println("Seeder executado: 3 usuários criados.");
        } else {
            System.out.println("Seeder ignorado: Já existem usuários no banco de dados.");
        }
    }
}
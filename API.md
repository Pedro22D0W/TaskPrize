# Documentação da API

## USER

### Buscar Usuário Específico
**GET** `/api/users/{userId}`

**Saída:**
```json
{
    "userId": 2,
    "name": "Maria Oliveira",
    "email": "maria.oliveira@example.com",
    "password": "senha456",
    "balance": 2000
}
```

---

### Atualizar Usuário
**PUT** `/api/users/{userId}`

**Entrada:**
```json
{
    "userId": 3,
    "name": "Jonas Silva Atualizado",
    "email": "joao.silva.atualizado@example.com",
    "password": "novaSenha123",
    "balance": 2000
}
```

---

### Deletar Usuário
**DELETE** `/api/users/{userId}`

---

## AUTH

### Autenticar Usuário
**POST** `/api/auth`

**Entrada:**
```json
{
    "email": "guibru@example.com",
    "password": "123123"
}
```

**Saída:**
```json
{
    "name": "guibru",
    "token": "<TOKEN_JWT>"
}
```

---

### Registrar Usuário
**POST** `/api/auth/register`

**Entrada:**
```json
{
    "name": "guibru",
    "email": "guibru@example.com",
    "password": "123123"
}
```

**Saída:**
```json
{
    "name": "guibru",
    "token": "<TOKEN_JWT>"
}
```

---

## TASK

### Criar Nova Tarefa
**POST** `/api/tasks`

**Entrada:**
```json
{
    "title": "Nova Tarefa",
    "description": "Descrição da nova tarefa",
    "progress": 0,
    "payment": 150,
    "status": false,
    "user": {
        "userId": 1
    }
}
```

**Saída:**
```json
{
    "taskId": 1,
    "title": "Nova Tarefa",
    "description": "Descrição da nova tarefa",
    "progress": 0,
    "payment": 150,
    "status": false,
    "user": {
        "userId": 1,
        "name": null,
        "email": null,
        "password": null,
        "balance": null
    }
}
```

---

### Buscar Tarefa Específica
**GET** `/api/tasks/{taskId}`

**Saída:**
```json
{
    "taskId": 1,
    "title": "Nova Tarefa",
    "description": "Descrição da nova tarefa",
    "progress": 0,
    "payment": 150,
    "status": false,
    "user": {
        "userId": 1,
        "name": "Jonas Silva Atualizado",
        "email": "joao.silva.atualizado@example.com",
        "password": "novaSenha123",
        "balance": 2000
    }
}
```

---

### Atualizar Tarefa
**PUT** `/api/tasks/{taskId}`

**Entrada:**
```json
{
    "title": "Tarefa Atualizada",
    "description": "Descrição atualizada",
    "progress": 50,
    "payment": 200,
    "status": true
}
```

**Saída:**
```json
{
    "taskId": 1,
    "title": "Tarefa Atualizada",
    "description": "Descrição atualizada",
    "progress": 50,
    "payment": 200,
    "status": true,
    "user": {
        "userId": 1,
        "name": "Jonas Silva Atualizado",
        "email": "joao.silva.atualizado@example.com",
        "password": "novaSenha123",
        "balance": 2000
    }
}
```

---

### Buscar Todas as Tarefas de um Usuário
**GET** `/api/tasks/user/{userId}`

**Saída:**
```json
[
    {
        "taskId": 1,
        "title": "Tarefa Atualizada",
        "description": "Descrição atualizada",
        "progress": 50,
        "payment": 200,
        "status": true,
        "user": {
            "userId": 1,
            "name": "Jonas Silva Atualizado",
            "email": "joao.silva.atualizado@example.com",
            "password": "novaSenha123",
            "balance": 2000
        }
    }
]
```

---

### Deletar Tarefa
**DELETE** `/api/tasks/{taskId}`

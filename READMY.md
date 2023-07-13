# Mock

### .env
Содержит переменные необходимые для Dockera
```
API_PORT=3001
API_HOST=http://localhost:


TYPEORM_CONNECTION=mongodb // используемая в проекте БД
TYPEORM_DATABASE=testbase // имя БД
TYPEORM_PORT=27017
TYPEORM_HOST=localhost
```

### Запуск
Заходим в backend (nest приложение):
 - npm run install (устанавливаем зависимости для nest)
В общей папке (new-mock-server):
 - docker-compose up --build(Создаем Docker container со всеми зависимостями)
 - docker-compose rm (удалить контейнер)

 ## Структура папки new-mock-server
- backend - nest приложение
- mongo_seed - папка с файлами для БД
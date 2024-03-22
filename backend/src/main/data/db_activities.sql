CREATE TABLE activities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    start TIMESTAMP WITHOUT TIME ZONE,
    "end" TIMESTAMP WITHOUT TIME ZONE,
    trainer VARCHAR(255)
);

INSERT INTO activities (id, name, description, start, "end", trainer)
VALUES
    (1, 'Pita crossfit', 'Entrenamiento de alta intensidad. Intenta atrapar el mayor número de pitas posibles en una hora. Un ejercicio extremo solo apto para deportistas de alto nivel.', '2024-03-20 08:00:00', '2024-03-20 09:00:00', 'Juan Pérez'),
    (2, 'Mayado indoor', 'Actividad indoor. Ejercicio intensivo para fortalecer espalda, hombros y brazos.', '2024-03-18 09:00:00', '2024-03-18 10:00:00', 'María Gómez'),
    (3, 'Pig pump', 'Entrenamiento de alta intensidad. Mide tu resistencia con un auténtico gochu asturcelta.', '2024-03-19 10:00:00', '2024-03-19 11:00:00', 'Carlos Martínez'),
    (4, 'Zzzzzumba', 'Clase de baile y ejercicio aeróbico. ¿Pensabas que bailar era divertido? Espera a hacerlo esquivando abejas.', '2024-03-20 11:00:00', '2024-03-20 12:00:00', 'Laura Rodríguez'),
    (5, 'Carretilla balance', 'Ejercicio de equilibrio y fortaleza. El entrenamiento más completo: trabaja tren superior e inferior al máximo.', '2024-03-22 09:00:00', '2024-03-22 10:00:00', 'Pedro Sánchez'),
    (6, 'Pig pump', 'Entrenamiento de alta intensidad. Mide tu resistencia con un auténtico gochu asturcelta.', '2024-03-21 13:00:00', '2024-03-21 14:00:00', 'Ana García'),
    (7, 'Mayado indoor', 'Actividad indoor. Ejercicio intensivo para fortalecer espalda, hombros y brazos.', '2024-03-18 14:00:00', '2024-03-18 15:00:00', 'Sofía López'),
    (8, 'Carretilla balance', 'Ejercicio de equilibrio y fortaleza. El entrenamiento más completo: trabaja tren superior e inferior al máximo.', '2024-03-22 15:00:00', '2024-03-22 16:00:00', 'David Fernández'),
    (9, 'Zzzzzumba', 'Clase de baile y ejercicio aeróbico. ¿Pensabas que bailar era divertido? Espera a hacerlo esquivando abejas.', '2024-03-19 16:00:00', '2024-03-19 17:00:00', 'Elena Martín'),
    (10, 'Pita crossfit', 'Entrenamiento de alta intensidad. Intenta atrapar el mayor número de pitas posibles en una hora. Un ejercicio extremo solo apto para deportistas de alto nivel.', '2024-03-22 17:00:00', '2024-03-22 18:00:00', 'Javier Ruiz'),
    (11, 'Pig pump', 'Entrenamiento de alta intensidad. Mide tu resistencia con un auténtico gochu asturcelta.', '2024-03-18 18:00:00', '2024-03-18 19:00:00', 'Marina López'),
    (12, 'Zzzzzumba', 'Clase de baile y ejercicio aeróbico. ¿Pensabas que bailar era divertido? Espera a hacerlo esquivando abejas.', '2024-03-21 19:00:00', '2024-03-21 20:00:00', 'Roberto García');


ALTER TABLE activities
ADD COLUMN url VARCHAR(255);


UPDATE activities
SET url = 'https://wl-genial.cf.tsp.li/resize/728x/jpg/608/2a6/0605a8559e8e3eef7bd50598b8.jpg'
WHERE id = 1;

UPDATE activities
SET url = 'https://www.canalextremadura.es/sites/default/files/Media/Images/2020-10/GeneracionD_181020_RURALGYM.jpg'
WHERE id = 2;

UPDATE activities
SET url = 'https://static.vecteezy.com/system/resources/previews/024/522/291/large_2x/pig-with-barbell-is-standing-on-a-barbell-ai-generated-free-photo.jpg'
WHERE id = 3;

UPDATE activities
SET url = 'https://d2yoo3qu6vrk5d.cloudfront.net/images/20170317040221/gettyimages-119293755-914x607.jpg?itok=1489747190'
WHERE id = 4;

UPDATE activities
SET url = 'https://www.muchoneumatico.com/blog/wp-content/uploads/2022/04/mature-asian-farmer-with-wheelbarrow.jpg'
WHERE id = 5;

UPDATE activities
SET url = 'https://static.vecteezy.com/system/resources/previews/024/522/291/large_2x/pig-with-barbell-is-standing-on-a-barbell-ai-generated-free-photo.jpg'
WHERE id = 6;

UPDATE activities
SET url = 'https://www.canalextremadura.es/sites/default/files/Media/Images/2020-10/GeneracionD_181020_RURALGYM.jpg'
WHERE id = 7;

UPDATE activities
SET url = 'https://www.muchoneumatico.com/blog/wp-content/uploads/2022/04/mature-asian-farmer-with-wheelbarrow.jpg'
WHERE id = 8;

UPDATE activities
SET url = 'https://d2yoo3qu6vrk5d.cloudfront.net/images/20170317040221/gettyimages-119293755-914x607.jpg?itok=1489747190'
WHERE id = 9;

UPDATE activities
SET url = 'https://wl-genial.cf.tsp.li/resize/728x/jpg/608/2a6/0605a8559e8e3eef7bd50598b8.jpg'
WHERE id = 10;

UPDATE activities
SET url = 'https://static.vecteezy.com/system/resources/previews/024/522/291/large_2x/pig-with-barbell-is-standing-on-a-barbell-ai-generated-free-photo.jpg'
WHERE id = 11;

UPDATE activities
SET url = 'https://d2yoo3qu6vrk5d.cloudfront.net/images/20170317040221/gettyimages-119293755-914x607.jpg?itok=1489747190'
WHERE id = 12;


ALTER TABLE activities RENAME COLUMN url TO urlrural;
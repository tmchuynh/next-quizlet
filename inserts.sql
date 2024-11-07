-- Insert into quizzes table for 'Art Quiz' Levels 1-5
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Art Quiz',
        'A comprehensive quiz on art history and movements.',
        1
    );

SET @art_quiz_id_level1 = LAST_INSERT_ID();

-- Level 1 Questions for 'Art Quiz'
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Which art movement is Pablo Picasso associated with?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Insert answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Impressionism',
        FALSE
    ),
    (@q1_id, 'Cubism', TRUE),
    (@q1_id, 'Surrealism', FALSE),
    (@q1_id, 'Baroque', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'True or False: Vincent van Gogh cut off his own ear.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Insert answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Name the artist known for painting "The Starry Night".',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Since written questions may not have predefined answers, you can store the correct answer for validation
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Vincent van Gogh',
        TRUE
    );

-- Question 4: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'True or False: The Mona Lisa was painted by Leonardo da Vinci.',
        'true_false',
        1
    );

SET @q4_id = LAST_INSERT_ID();

-- Insert answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q4_id, 'True', TRUE),
    (@q4_id, 'False', FALSE);

-- Question 5: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Name the artist known for the "Blue Period".',
        'written',
        1
    );

SET @q5_id = LAST_INSERT_ID();

-- Insert the correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'Pablo Picasso', TRUE);

-- Question 6: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'What is the technique of painting on wet plaster called?',
        'multiple_choice',
        1
    );

SET @q6_id = LAST_INSERT_ID();

-- Insert answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q6_id, 'Fresco', TRUE),
    (@q6_id, 'Tempera', FALSE),
    (@q6_id, 'Gouache', FALSE),
    (@q6_id, 'Encaustic', FALSE);

-- Question 7: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Who is the artist behind the "Campbell\'s Soup Cans"?',
        'multiple_choice',
        1
    );

SET @q7_id = LAST_INSERT_ID();

-- Answers for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q7_id, 'Andy Warhol', TRUE),
    (
        @q7_id,
        'Roy Lichtenstein',
        FALSE
    ),
    (
        @q7_id,
        'Jackson Pollock',
        FALSE
    ),
    (@q7_id, 'Mark Rothko', FALSE);

-- Question 8: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Claude Monet was a leading figure in the Impressionist movement.',
        'true_false',
        1
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q8_id, 'True', TRUE),
    (@q8_id, 'False', FALSE);

-- Question 9: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Name the art movement characterized by an emphasis on light and its changing qualities.',
        'written',
        1
    );

SET @q9_id = LAST_INSERT_ID();

-- Correct answer for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'Impressionism', TRUE);

-- Question 10: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Which artist is known for the mural "Guernica"?',
        'multiple_choice',
        1
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q10_id,
        'Pablo Picasso',
        TRUE
    ),
    (
        @q10_id,
        'Salvador Dalí',
        FALSE
    ),
    (@q10_id, 'Frida Kahlo', FALSE),
    (
        @q10_id,
        'Henri Matisse',
        FALSE
    );

-- Question 11: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'The term "Cubism" was coined by art critic Louis Vauxcelles.',
        'true_false',
        1
    );

SET @q11_id = LAST_INSERT_ID();

-- Answers for Question 11
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q11_id, 'True', TRUE),
    (@q11_id, 'False', FALSE);

-- Question 12: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Who painted the "Mona Lisa"?',
        'written',
        1
    );

SET @q12_id = LAST_INSERT_ID();

-- Correct answer for Question 12
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q12_id,
        'Leonardo da Vinci',
        TRUE
    );

-- Question 13: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'What is the art of creating three-dimensional works by carving or modeling materials?',
        'multiple_choice',
        1
    );

SET @q13_id = LAST_INSERT_ID();

-- Answers for Question 13
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q13_id, 'Painting', FALSE),
    (@q13_id, 'Sculpture', TRUE),
    (@q13_id, 'Drawing', FALSE),
    (@q13_id, 'Printmaking', FALSE);

-- Question 14: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Impressionism began in the 20th century.',
        'true_false',
        1
    );

SET @q14_id = LAST_INSERT_ID();

-- Answers for Question 14
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q14_id, 'True', FALSE),
    (@q14_id, 'False', TRUE);

-- Question 15: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level1,
        'Name the artist known for the "Water Lilies" series.',
        'written',
        1
    );

SET @q15_id = LAST_INSERT_ID();

-- Correct answer for Question 15
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q15_id, 'Claude Monet', TRUE);

INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Art Quiz',
        'A comprehensive quiz on art history and movements.',
        2
    );

SET @art_quiz_id_level2 = LAST_INSERT_ID();

-- Level 2 Questions for 'Art Quiz'
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level2,
        'Which artist painted the ceiling of the Sistine Chapel?',
        'multiple_choice',
        2
    );

SET @q1_id = LAST_INSERT_ID();

-- Insert answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Leonardo da Vinci',
        FALSE
    ),
    (@q1_id, 'Michelangelo', TRUE),
    (@q1_id, 'Raphael', FALSE),
    (@q1_id, 'Donatello', FALSE);

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level2,
        'Which art movement is characterized by an emphasis on light and its changing qualities?',
        'multiple_choice',
        2
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Impressionism', TRUE),
    (@q1_id, 'Cubism', FALSE),
    (
        @q1_id,
        'Expressionism',
        FALSE
    ),
    (@q1_id, 'Baroque', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level2,
        'True or False: Andy Warhol was a leading figure in the Pop Art movement.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Insert answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level2,
        'True or False: Michelangelo painted the Mona Lisa.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level2,
        'Name the artist who painted "The Persistence of Memory".',
        'written',
        2
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Salvador Dalí', TRUE);

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level2,
        'Describe the primary characteristics of Impressionist art.',
        'written',
        2
    );

SET @q3_id = LAST_INSERT_ID();

-- Store a sample correct answer for validation
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Emphasis on light and its changing qualities, visible brush strokes, and open composition.',
        TRUE
    );

-- Insert Level 3 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Art Quiz',
        'A comprehensive quiz on art history and movements.',
        3
    );

SET @art_quiz_id_level3 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level3,
        'Which artist is famous for the painting "Girl with a Pearl Earring"?',
        'multiple_choice',
        3
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Johannes Vermeer',
        TRUE
    ),
    (@q1_id, 'Rembrandt', FALSE),
    (
        @q1_id,
        'Francisco Goya',
        FALSE
    ),
    (@q1_id, 'Edgar Degas', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level3,
        'True or False: The term "Impressionism" originated from a painting by Claude Monet.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level3,
        'Describe the primary characteristics of Surrealism.',
        'written',
        3
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Surrealism focuses on unlocking the subconscious mind and portrays dream-like scenes.',
        TRUE
    );

-- Insert Level 4 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Art Quiz',
        'A comprehensive quiz on art history and movements.',
        4
    );

SET @art_quiz_id_level4 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level4,
        'Which art movement emphasizes simplicity and abstraction?',
        'multiple_choice',
        4
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Minimalism', TRUE),
    (@q1_id, 'Baroque', FALSE),
    (@q1_id, 'Romanticism', FALSE),
    (@q1_id, 'Realism', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level4,
        'True or False: Jackson Pollock was a leading figure in Abstract Expressionism.',
        'true_false',
        4
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level4,
        'Explain the significance of the "Fountain" by Marcel Duchamp.',
        'written',
        4
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'It challenged traditional notions of art by presenting a ready-made object as art.',
        TRUE
    );

-- Insert Level 5 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Art Quiz',
        'A comprehensive quiz on art history and movements.',
        5
    );

SET @art_quiz_id_level5 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level5,
        'Which artist is known for the "Black Square" painting?',
        'multiple_choice',
        5
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Kazimir Malevich',
        TRUE
    ),
    (
        @q1_id,
        'Wassily Kandinsky',
        FALSE
    ),
    (
        @q1_id,
        'Piet Mondrian',
        FALSE
    ),
    (@q1_id, 'Paul Klee', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level5,
        'True or False: The De Stijl movement focused on simplicity and reduced forms.',
        'true_false',
        5
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @art_quiz_id_level5,
        'Discuss the impact of Cubism on modern art.',
        'written',
        5
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Cubism revolutionized European painting and sculpture by introducing abstracted forms.',
        TRUE
    );

-- Insert Level 1 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Astrology Quiz',
        'Test your knowledge of astrology.',
        1
    );

SET @astrology_quiz_id_level1 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Which zodiac sign is represented by the Twins?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Gemini', TRUE),
    (@q1_id, 'Pisces', FALSE),
    (@q1_id, 'Libra', FALSE),
    (@q1_id, 'Sagittarius', FALSE);

-- Question 4: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: Aries is the first sign of the zodiac.',
        'true_false',
        1
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q4_id, 'True', TRUE),
    (@q4_id, 'False', FALSE);

-- Example for Question 1
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Which zodiac sign is represented by the Lion?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Leo', TRUE),
    (@q1_id, 'Aries', FALSE),
    (@q1_id, 'Sagittarius', FALSE),
    (@q1_id, 'Taurus', FALSE);

-- Question 5: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Name the element associated with the zodiac sign Scorpio.',
        'written',
        1
    );

SET @q5_id = LAST_INSERT_ID();

-- Correct answer for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'Water', TRUE);

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Which zodiac sign is represented by the Archer?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Insert answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Sagittarius', TRUE),
    (@q1_id, 'Aries', FALSE),
    (@q1_id, 'Libra', FALSE),
    (@q1_id, 'Gemini', FALSE);

-- Question 6: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: Aquarius is a water sign.',
        'true_false',
        1
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q6_id, 'True', FALSE),
    (@q6_id, 'False', TRUE);

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Which zodiac sign is symbolized by the Bull?',
        'written',
        1
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q7_id, 'Taurus', TRUE);

-- Question 8: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: Virgo is an air sign.',
        'true_false',
        1
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q8_id, 'True', FALSE),
    (@q8_id, 'False', TRUE);

-- Question 9: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Name the ruling planet of the zodiac sign Sagittarius.',
        'written',
        1
    );

SET @q9_id = LAST_INSERT_ID();

-- Correct answer for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'Jupiter', TRUE);

-- Question 10: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: Capricorn is represented by the Goat.',
        'true_false',
        1
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q10_id, 'True', TRUE),
    (@q10_id, 'False', FALSE);

-- Question 11: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Which zodiac sign is known as "The Scales"?',
        'written',
        1
    );

SET @q11_id = LAST_INSERT_ID();

-- Correct answer for Question 11
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q11_id, 'Libra', TRUE);

-- Question 12: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: Pisces is the last sign of the zodiac.',
        'true_false',
        1
    );

SET @q12_id = LAST_INSERT_ID();

-- Answers for Question 12
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q12_id, 'True', TRUE),
    (@q12_id, 'False', FALSE);

-- Question 13: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Name the element associated with the zodiac sign Gemini.',
        'written',
        1
    );

SET @q13_id = LAST_INSERT_ID();

-- Correct answer for Question 13
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q13_id, 'Air', TRUE);

-- Question 14: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: The zodiac sign Cancer is represented by the Crab.',
        'true_false',
        1
    );

SET @q14_id = LAST_INSERT_ID();

-- Answers for Question 14
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q14_id, 'True', TRUE),
    (@q14_id, 'False', FALSE);

-- Question 15: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Which planet is the ruler of the zodiac sign Aries?',
        'written',
        1
    );

SET @q15_id = LAST_INSERT_ID();

-- Correct answer for Question 15
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q15_id, 'Mars', TRUE);

-- Question 16: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: Libra is an earth sign.',
        'true_false',
        1
    );

SET @q16_id = LAST_INSERT_ID();

-- Answers for Question 16
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q16_id, 'True', FALSE),
    (@q16_id, 'False', TRUE);

-- Question 17: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Which zodiac sign is symbolized by the Maiden?',
        'written',
        1
    );

SET @q17_id = LAST_INSERT_ID();

-- Correct answer for Question 17
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q17_id, 'Virgo', TRUE);

-- Question 18: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: The element of Fire is associated with Aries, Leo, and Sagittarius.',
        'true_false',
        1
    );

SET @q18_id = LAST_INSERT_ID();

-- Answers for Question 18
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q18_id, 'True', TRUE),
    (@q18_id, 'False', FALSE);

-- Question 19: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Name the symbol associated with the zodiac sign Capricorn.',
        'written',
        1
    );

SET @q19_id = LAST_INSERT_ID();

-- Correct answer for Question 19
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q19_id, 'Sea Goat', TRUE);

-- Question 20: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: The zodiac sign Pisces is associated with the element of Earth.',
        'true_false',
        1
    );

SET @q20_id = LAST_INSERT_ID();

-- Answers for Question 20
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q20_id, 'True', FALSE),
    (@q20_id, 'False', TRUE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: Leo is a water sign.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Insert answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Name the planet that rules the zodiac sign Virgo.',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Insert the correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Mercury', TRUE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'True or False: There are 13 zodiac signs in Western astrology.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level1,
        'Name the planet that rules over the sign of Leo.',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Sun', TRUE);

-- Insert Level 2 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Astrology Quiz',
        'Test your knowledge of astrology.',
        2
    );

SET @astrology_quiz_id_level2 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level2,
        'Which element is associated with Taurus, Virgo, and Capricorn?',
        'multiple_choice',
        2
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Earth', TRUE),
    (@q1_id, 'Fire', FALSE),
    (@q1_id, 'Air', FALSE),
    (@q1_id, 'Water', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level2,
        'True or False: Mercury is the ruling planet of Gemini.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level2,
        'Describe the primary traits associated with the zodiac sign Cancer.',
        'written',
        2
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Emotional, intuitive, nurturing, and protective.',
        TRUE
    );

INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Astrology Quiz',
        'Test your knowledge of astrology.',
        3
    );

SET @astrology_quiz_id_level3 = LAST_INSERT_ID();

-- Level 3 Quiz
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level3,
        'Which planet is known as the planet of love and beauty?',
        'multiple_choice',
        3
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Venus', TRUE),
    (@q1_id, 'Mars', FALSE),
    (@q1_id, 'Jupiter', FALSE),
    (@q1_id, 'Mercury', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level3,
        'True or False: Aquarius is a water sign.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level3,
        'Name the two signs ruled by Mercury.',
        'written',
        3
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Gemini and Virgo',
        TRUE
    );

INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Astrology Quiz',
        'Test your knowledge of astrology.',
        4
    );

SET @astrology_quiz_id_level4 = LAST_INSERT_ID();

-- Level 4 Quiz
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level4,
        'Which zodiac sign is symbolized by the scales?',
        'multiple_choice',
        4
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Libra', TRUE),
    (@q1_id, 'Aquarius', FALSE),
    (@q1_id, 'Pisces', FALSE),
    (@q1_id, 'Sagittarius', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level4,
        'True or False: Capricorn is a fire sign.',
        'true_false',
        4
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level4,
        'Which planet is considered the ruler of Sagittarius?',
        'written',
        4
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Jupiter', TRUE);

INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Astrology Quiz',
        'Test your knowledge of astrology.',
        5
    );

SET @astrology_quiz_id_level5 = LAST_INSERT_ID();

-- Level 5 Quiz
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level5,
        'What element is associated with the sign of Libra?',
        'multiple_choice',
        5
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Air', TRUE),
    (@q1_id, 'Earth', FALSE),
    (@q1_id, 'Fire', FALSE),
    (@q1_id, 'Water', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level5,
        'True or False: Leo is ruled by the Sun.',
        'true_false',
        5
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @astrology_quiz_id_level5,
        'Describe the primary personality traits of Scorpio.',
        'written',
        5
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Passionate, determined, intense, and resourceful.',
        TRUE
    );

-- Insert Level 1 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Computer Science Quiz',
        'Test your knowledge in computer science.',
        1
    );

SET @cs_quiz_id_level1 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level1,
        'What does "HTTP" stand for?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'HyperText Transfer Protocol',
        TRUE
    ),
    (
        @q1_id,
        'HyperText Transmission Protocol',
        FALSE
    ),
    (
        @q1_id,
        'HyperTransfer Text Protocol',
        FALSE
    ),
    (
        @q1_id,
        'HyperTransmission Text Protocol',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level1,
        'True or False: SSDs are faster than HDDs.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level1,
        'Define the term "algorithm".',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'A step-by-step procedure for solving a problem or performing a task.',
        TRUE
    );

-- Example for Question 1
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level1,
        'What does "RAM" stand for?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Random Access Memory',
        TRUE
    ),
    (
        @q1_id,
        'Readily Available Memory',
        FALSE
    ),
    (
        @q1_id,
        'Read Access Memory',
        FALSE
    ),
    (
        @q1_id,
        'Random Allocation Memory',
        FALSE
    );

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level1,
        'What does "CPU" stand for in computer terminology?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Insert answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Central Processing Unit',
        TRUE
    ),
    (
        @q1_id,
        'Computer Primary Unit',
        FALSE
    ),
    (
        @q1_id,
        'Central Programming Unit',
        FALSE
    ),
    (
        @q1_id,
        'Computer Processing Utility',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level1,
        'True or False: RAM stands for Random Access Memory.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Insert answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level1,
        'Explain the concept of polymorphism in Object-Oriented Programming.',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Store a sample correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Polymorphism is the ability of different objects to respond uniquely to the same method call.',
        TRUE
    );

-- Insert Level 2 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Computer Science Quiz',
        'Test your knowledge in computer science.',
        2
    );

SET @cs_quiz_id_level2 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level2,
        'What is the time complexity of searching for an element in a balanced binary search tree?',
        'multiple_choice',
        2
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'O(log n)', TRUE),
    (@q1_id, 'O(n)', FALSE),
    (@q1_id, 'O(1)', FALSE),
    (@q1_id, 'O(n^2)', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level2,
        'True or False: Python is a statically-typed programming language.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level2,
        'Name the fundamental data structure used for implementing a queue.',
        'written',
        2
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Linked List', TRUE);

-- Insert Level 3 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Computer Science Quiz',
        'Test your knowledge in computer science.',
        3
    );

SET @cs_quiz_id_level3 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level3,
        'Which of the following is a NoSQL database?',
        'multiple_choice',
        3
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'MongoDB', TRUE),
    (@q1_id, 'MySQL', FALSE),
    (@q1_id, 'PostgreSQL', FALSE),
    (@q1_id, 'Oracle', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level3,
        'True or False: In object-oriented programming, encapsulation allows for data hiding.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level3,
        'Name the principle in software design that suggests a class should only have one reason to change.',
        'written',
        3
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Single Responsibility Principle',
        TRUE
    );

-- Insert Level 4 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Computer Science Quiz',
        'Test your knowledge in computer science.',
        4
    );

SET @cs_quiz_id_level4 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level4,
        'Which sorting algorithm has a worst-case time complexity of O(n log n)?',
        'multiple_choice',
        4
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Merge Sort', TRUE),
    (@q1_id, 'Quick Sort', FALSE),
    (@q1_id, 'Bubble Sort', FALSE),
    (
        @q1_id,
        'Insertion Sort',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level4,
        'True or False: Machine learning is a subset of artificial intelligence.',
        'true_false',
        4
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @cs_quiz_id_level4,
        'Name the type of algorithm that solves problems by combining solutions to subproblems.',
        'written',
        4
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Dynamic Programming',
        TRUE
    );

-- Insert Level 1 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Chemistry Quiz',
        'Test your knowledge in chemistry.',
        1
    );

SET @chem_quiz_id_level1 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level1,
        'What is the chemical symbol for Sodium?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Na', TRUE),
    (@q1_id, 'S', FALSE),
    (@q1_id, 'So', FALSE),
    (@q1_id, 'N', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level1,
        'True or False: Water boils at 100 degrees Celsius at sea level.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level1,
        'Name the gas that plants absorb during photosynthesis.',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Carbon Dioxide',
        TRUE
    );

-- Example for Question 1
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level1,
        'What is the chemical symbol for water?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'H2O', TRUE),
    (@q1_id, 'CO2', FALSE),
    (@q1_id, 'O2', FALSE),
    (@q1_id, 'H2', FALSE);

-- Insert Level 2 Chemistry Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Chemistry Quiz',
        'Test your knowledge in chemistry.',
        2
    );

SET @chem_quiz_id_level2 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level2,
        'What is the atomic number of oxygen?',
        'multiple_choice',
        2
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, '8', TRUE),
    (@q1_id, '16', FALSE),
    (@q1_id, '6', FALSE),
    (@q1_id, '10', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level2,
        'True or False: Water is composed of two hydrogen atoms and one oxygen atom.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level2,
        'Name the process by which a liquid turns into a gas.',
        'written',
        2
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Evaporation', TRUE);

-- Insert Level 3 Chemistry Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Chemistry Quiz',
        'Test your knowledge in chemistry.',
        3
    );

SET @chem_quiz_id_level3 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level3,
        'Which element has the highest electronegativity?',
        'multiple_choice',
        3
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Fluorine', TRUE),
    (@q1_id, 'Oxygen', FALSE),
    (@q1_id, 'Chlorine', FALSE),
    (@q1_id, 'Nitrogen', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level3,
        'True or False: Helium is a noble gas.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level3,
        'What is the chemical formula for ammonia?',
        'written',
        3
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'NH3', TRUE);

-- Insert Level 4 Chemistry Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Chemistry Quiz',
        'Test your knowledge in chemistry.',
        4
    );

SET @chem_quiz_id_level4 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level4,
        'What type of bond is formed when electrons are shared between atoms?',
        'multiple_choice',
        4
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Covalent bond', TRUE),
    (@q1_id, 'Ionic bond', FALSE),
    (
        @q1_id,
        'Metallic bond',
        FALSE
    ),
    (
        @q1_id,
        'Hydrogen bond',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level4,
        'True or False: Sodium chloride (NaCl) is a compound formed by covalent bonds.',
        'true_false',
        4
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @chem_quiz_id_level4,
        'Name the scientist who developed the periodic table.',
        'written',
        4
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Dmitri Mendeleev',
        TRUE
    );

-- Insert Level 1 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'History Quiz',
        'Test your knowledge of historical events.',
        1
    );

SET @history_quiz_id_level1 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'Who was the first President of the United States?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'George Washington',
        TRUE
    ),
    (
        @q1_id,
        'Thomas Jefferson',
        FALSE
    ),
    (
        @q1_id,
        'Abraham Lincoln',
        FALSE
    ),
    (@q1_id, 'John Adams', FALSE);

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'Who discovered America?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'Name the explorer who is credited with discovering the New World in 1492.',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Christopher Columbus',
        TRUE
    );

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Christopher Columbus',
        TRUE
    ),
    (@q1_id, 'Leif Erikson', FALSE),
    (
        @q1_id,
        'Amerigo Vespucci',
        FALSE
    ),
    (
        @q1_id,
        'Ferdinand Magellan',
        FALSE
    );

-- Example for Question 1
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'In which year did the Titanic sink?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, '1912', TRUE),
    (@q1_id, '1918', FALSE),
    (@q1_id, '1920', FALSE),
    (@q1_id, '1905', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'What was the name of the ship that carried the Pilgrims to America?',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Mayflower', TRUE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'True or False: The Declaration of Independence was signed in 1776.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'True or False: The Great Wall of China was built in the 20th century.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'In which year did World War II end?',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, '1945', TRUE);

-- Question 1: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level1,
        'True or False: The Great Wall of China was originally built during the Ming dynasty.',
        'true_false',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'True', FALSE),
    (@q1_id, 'False', TRUE);

-- Insert Level 2 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'History Quiz',
        'Test your knowledge of historical events.',
        2
    );

SET @history_quiz_id_level2 = LAST_INSERT_ID();

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level2,
        'True or False: Julius Caesar was assassinated on the Ides of March.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 4: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level2,
        'True or False: The Renaissance began in England.',
        'true_false',
        2
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q4_id, 'True', FALSE),
    (@q4_id, 'False', TRUE);

-- Question 5: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level2,
        'What year did the Berlin Wall fall?',
        'written',
        2
    );

SET @q5_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, '1989', TRUE);

-- Insert Level 3 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'History Quiz',
        'Test your knowledge of historical events.',
        3
    );

SET @history_quiz_id_level3 = LAST_INSERT_ID();

-- Question 6: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level3,
        'True or False: The Roman Empire fell in 476 AD.',
        'true_false',
        3
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q6_id, 'True', TRUE),
    (@q6_id, 'False', FALSE);

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level3,
        'Who was the first Holy Roman Emperor?',
        'written',
        3
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q7_id, 'Charlemagne', TRUE);

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level3,
        'Who was the first emperor of the Roman Empire?',
        'multiple_choice',
        3
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Augustus', TRUE),
    (
        @q1_id,
        'Julius Caesar',
        FALSE
    ),
    (@q1_id, 'Nero', FALSE),
    (@q1_id, 'Caligula', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level3,
        'True or False: The Renaissance period started in the 16th century.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Insert Level 4 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'History Quiz',
        'Test your knowledge of historical events.',
        4
    );

SET @history_quiz_id_level4 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level4,
        'What was the main religion of the Ottoman Empire?',
        'multiple_choice',
        4
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Islam', TRUE),
    (@q1_id, 'Christianity', FALSE),
    (@q1_id, 'Judaism', FALSE),
    (@q1_id, 'Hinduism', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level4,
        'True or False: The Industrial Revolution began in France.',
        'true_false',
        4
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level4,
        'Who was the leader of the Soviet Union during World War II?',
        'written',
        4
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Joseph Stalin', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level3,
        'Name the treaty that ended World War I.',
        'written',
        3
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Treaty of Versailles',
        TRUE
    );

-- Insert Level 4 Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'History Quiz',
        'Test your knowledge of historical events.',
        4
    );

SET @history_quiz_id_level4 = LAST_INSERT_ID();

-- Question 8: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level4,
        'True or False: The Byzantine Empire spoke primarily Latin.',
        'true_false',
        4
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q8_id, 'True', FALSE),
    (@q8_id, 'False', TRUE);

-- Question 9: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level4,
        'Who was the leader of the Soviet Union during the Cuban Missile Crisis?',
        'written',
        4
    );

SET @q9_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q9_id,
        'Nikita Khrushchev',
        TRUE
    );

-- Question 10: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @history_quiz_id_level4,
        'True or False: The Hundred Years’ War lasted exactly 100 years.',
        'true_false',
        4
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q10_id, 'True', FALSE),
    (@q10_id, 'False', TRUE);

-- Insert Level 1 Design Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Design Quiz',
        'Test your knowledge of basic design concepts.',
        1
    );

SET @design_quiz_id_level1 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level1,
        'Which color model is used for printing?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'CMYK', TRUE),
    (@q1_id, 'RGB', FALSE),
    (@q1_id, 'HEX', FALSE),
    (@q1_id, 'HSB', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level1,
        'True or False: Serif fonts are commonly used for body text.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level1,
        'Name the design principle that suggests that elements with the same characteristics should be grouped together.',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Proximity', TRUE);

-- Insert Level 2 Design Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Design Quiz',
        'Test your intermediate knowledge of design concepts.',
        2
    );

SET @design_quiz_id_level2 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level2,
        'What is the term for the space between lines of text?',
        'multiple_choice',
        2
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Leading', TRUE),
    (@q1_id, 'Kerning', FALSE),
    (@q1_id, 'Tracking', FALSE),
    (@q1_id, 'Baseline', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level2,
        'True or False: A vector image loses quality when scaled.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level2,
        'Describe the function of a grid system in graphic design.',
        'written',
        2
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'A grid system helps align and organize elements to create a cohesive and balanced layout.',
        TRUE
    );

-- Insert Level 3 Design Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Design Quiz',
        'Test your advanced knowledge of design concepts.',
        3
    );

SET @design_quiz_id_level3 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level3,
        'What is the main characteristic of minimalist design?',
        'multiple_choice',
        3
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Simplicity and use of negative space',
        TRUE
    ),
    (
        @q1_id,
        'Heavy ornamentation and detail',
        FALSE
    ),
    (
        @q1_id,
        'Complex color schemes',
        FALSE
    ),
    (
        @q1_id,
        'Use of multiple typefaces',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level3,
        'True or False: The rule of thirds is only applicable to photography.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level3,
        'What is the purpose of using contrast in design?',
        'written',
        3
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Contrast helps differentiate elements and draw attention to important areas.',
        TRUE
    );

-- Insert Level 4 Design Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Design Quiz',
        'Challenge your expertise in design theory and practice.',
        4
    );

SET @design_quiz_id_level4 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level4,
        'What does “white space” refer to in design?',
        'multiple_choice',
        4
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'The empty space around elements',
        TRUE
    ),
    (
        @q1_id,
        'A specific color shade',
        FALSE
    ),
    (
        @q1_id,
        'Unused ink on a page',
        FALSE
    ),
    (
        @q1_id,
        'Lines within a grid',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level4,
        'True or False: Raster images are scalable without losing quality.',
        'true_false',
        4
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level4,
        'What is a mood board and how is it used in the design process?',
        'written',
        4
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'A mood board is a visual tool that combines various elements such as colors, textures, and images to convey a design concept or project direction.',
        TRUE
    );

-- Insert Level 5 Design Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Design Quiz',
        'Test your comprehensive understanding of design and aesthetics.',
        5
    );

SET @design_quiz_id_level5 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level5,
        'What design principle focuses on the distribution of visual weight?',
        'multiple_choice',
        5
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Balance', TRUE),
    (@q1_id, 'Rhythm', FALSE),
    (@q1_id, 'Harmony', FALSE),
    (@q1_id, 'Emphasis', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level5,
        'True or False: Monochromatic color schemes use multiple hues.',
        'true_false',
        5
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @design_quiz_id_level5,
        'Explain the importance of typography in graphic design.',
        'written',
        5
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Typography is crucial as it sets the tone of the design, enhances readability, and reinforces the message conveyed to the audience.',
        TRUE
    );

-- Insert Level 1 Security Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Security Quiz',
        'Test your knowledge of basic security concepts.',
        1
    );

SET @security_quiz_id_level1 = LAST_INSERT_ID();

-- Questions for Level 1 Security Quiz
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'What does "VPN" stand for?',
        'multiple_choice',
        1
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Virtual Private Network',
        TRUE
    ),
    (
        @q1_id,
        'Virtual Protected Network',
        FALSE
    ),
    (
        @q1_id,
        'Verified Private Node',
        FALSE
    ),
    (
        @q1_id,
        'Virtual Public Network',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'True or False: A strong password should include a combination of letters, numbers, and special characters.',
        'true_false',
        1
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'Name one common type of malware.',
        'written',
        1
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Virus', TRUE);

-- Question 4: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'What is phishing?',
        'multiple_choice',
        1
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q4_id,
        'A cyber attack to steal sensitive information by pretending to be a trustworthy entity',
        TRUE
    ),
    (
        @q4_id,
        'A method of encrypting data',
        FALSE
    ),
    (
        @q4_id,
        'A security protocol',
        FALSE
    ),
    (
        @q4_id,
        'A type of firewall',
        FALSE
    );

-- Question 5: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'True or False: Firewalls are used to prevent unauthorized access to networks.',
        'true_false',
        1
    );

SET @q5_id = LAST_INSERT_ID();

-- Answers for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'True', TRUE),
    (@q5_id, 'False', FALSE);

-- Question 6: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'What is the purpose of two-factor authentication (2FA)?',
        'multiple_choice',
        1
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q6_id,
        'To add an additional layer of security by requiring a second form of verification',
        TRUE
    ),
    (
        @q6_id,
        'To encrypt passwords',
        FALSE
    ),
    (
        @q6_id,
        'To connect devices remotely',
        FALSE
    ),
    (
        @q6_id,
        'To scan for viruses',
        FALSE
    );

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'What is the process of converting data into a code to prevent unauthorized access?',
        'written',
        1
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q7_id, 'Encryption', TRUE);

-- Question 8: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'Which of the following is considered a secure method for storing passwords?',
        'multiple_choice',
        1
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q8_id,
        'Hashing with a salt',
        TRUE
    ),
    (
        @q8_id,
        'Storing in plain text',
        FALSE
    ),
    (
        @q8_id,
        'Using simple encryption',
        FALSE
    ),
    (
        @q8_id,
        'Writing on sticky notes',
        FALSE
    );

-- Question 9: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'True or False: Public Wi-Fi is safe for browsing and entering personal information without additional precautions.',
        'true_false',
        1
    );

SET @q9_id = LAST_INSERT_ID();

-- Answers for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'True', FALSE),
    (@q9_id, 'False', TRUE);

-- Question 10: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level1,
        'What is an SSL certificate used for?',
        'multiple_choice',
        1
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q10_id,
        'To encrypt data between a website and a user’s browser',
        TRUE
    ),
    (
        @q10_id,
        'To create a network firewall',
        FALSE
    ),
    (
        @q10_id,
        'To block pop-ups',
        FALSE
    ),
    (
        @q10_id,
        'To detect malware',
        FALSE
    );

-- Insert Level 2 Security Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Security Quiz',
        'Test your intermediate knowledge of security concepts.',
        2
    );

SET @security_quiz_id_level2 = LAST_INSERT_ID();

-- Level 2 Security Quiz Questions
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'What is a DDoS attack?',
        'multiple_choice',
        2
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'An attempt to disrupt normal traffic by overwhelming a network or server with a flood of internet traffic',
        TRUE
    ),
    (
        @q1_id,
        'A type of malware that encrypts data and demands ransom',
        FALSE
    ),
    (
        @q1_id,
        'A phishing scam targeting emails',
        FALSE
    ),
    (
        @q1_id,
        'A backdoor into a network',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'True or False: Firewalls can help protect against DDoS attacks.',
        'true_false',
        2
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'What is the primary purpose of a firewall?',
        'written',
        2
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'To monitor and control incoming and outgoing network traffic based on security rules.',
        TRUE
    );

-- Question 4: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'Which protocol ensures secure data transfer over the internet?',
        'multiple_choice',
        2
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q4_id, 'HTTPS', TRUE),
    (@q4_id, 'HTTP', FALSE),
    (@q4_id, 'FTP', FALSE),
    (@q4_id, 'SMTP', FALSE);

-- Question 5: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'True or False: Malware can only spread through email attachments.',
        'true_false',
        2
    );

SET @q5_id = LAST_INSERT_ID();

-- Answers for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'True', FALSE),
    (@q5_id, 'False', TRUE);

-- Question 6: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'What does the term “encryption” refer to?',
        'multiple_choice',
        2
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q6_id,
        'The process of converting data into a code to prevent unauthorized access',
        TRUE
    ),
    (
        @q6_id,
        'The process of backing up data to prevent loss',
        FALSE
    ),
    (
        @q6_id,
        'The method of erasing data securely',
        FALSE
    ),
    (
        @q6_id,
        'The method of compressing files',
        FALSE
    );

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'What does SSL stand for?',
        'written',
        2
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q7_id,
        'Secure Sockets Layer',
        TRUE
    );

-- Question 8: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'Which of the following is a type of social engineering attack?',
        'multiple_choice',
        2
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q8_id, 'Phishing', TRUE),
    (@q8_id, 'DDoS', FALSE),
    (
        @q8_id,
        'Brute force attack',
        FALSE
    ),
    (@q8_id, 'Keylogging', FALSE);

-- Question 9: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'True or False: Two-factor authentication is only used for financial transactions.',
        'true_false',
        2
    );

SET @q9_id = LAST_INSERT_ID();

-- Answers for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'True', FALSE),
    (@q9_id, 'False', TRUE);

-- Question 10: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level2,
        'What is the primary characteristic of ransomware?',
        'multiple_choice',
        2
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q10_id,
        'It encrypts the victim’s data and demands payment for decryption',
        TRUE
    ),
    (
        @q10_id,
        'It deletes files permanently',
        FALSE
    ),
    (
        @q10_id,
        'It steals login credentials',
        FALSE
    ),
    (
        @q10_id,
        'It monitors network activity',
        FALSE
    );

-- Insert Level 3 Security Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Security Quiz',
        'Test your advanced knowledge of security concepts.',
        3
    );

SET @security_quiz_id_level3 = LAST_INSERT_ID();

-- Level 3 Security Quiz Questions
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'What is a phishing scam?',
        'multiple_choice',
        3
    );

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'A type of social engineering attack targeting emails',
        TRUE
    ),
    (
        @q1_id,
        'A type of malware that encrypts data and demands ransom',
        FALSE
    ),
    (
        @q1_id,
        'A way to trick users into revealing their financial information',
        FALSE
    ),
    (
        @q1_id,
        'A method of erasing data securely',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'True or False: Social engineering attacks can be used to steal sensitive information.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'Which type of malware is designed to gain administrative-level control over a computer system without being detected?',
        'multiple_choice',
        3
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q1_id, 'Rootkit', TRUE),
    (@q1_id, 'Trojan', FALSE),
    (@q1_id, 'Spyware', FALSE),
    (@q1_id, 'Adware', FALSE);

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'True or False: A firewall can prevent all types of cyberattacks.',
        'true_false',
        3
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'What does the acronym VPN stand for?',
        'written',
        3
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'Virtual Private Network',
        TRUE
    );

-- Question 4: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'Which cryptographic protocol is used to secure communications over a computer network?',
        'multiple_choice',
        3
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q4_id, 'TLS/SSL', TRUE),
    (@q4_id, 'FTP', FALSE),
    (@q4_id, 'SMTP', FALSE),
    (@q4_id, 'POP3', FALSE);

-- Question 5: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'True or False: An IDS (Intrusion Detection System) can take action to block traffic if an attack is detected.',
        'true_false',
        3
    );

SET @q5_id = LAST_INSERT_ID();

-- Answers for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'True', FALSE),
    (@q5_id, 'False', TRUE);

-- Question 6: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'What is the process of converting data into an unreadable format to protect its confidentiality called?',
        'multiple_choice',
        3
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q6_id, 'Encryption', TRUE),
    (@q6_id, 'Hashing', FALSE),
    (@q6_id, 'Compression', FALSE),
    (@q6_id, 'Decryption', FALSE);

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'Name one commonly used asymmetric encryption algorithm.',
        'written',
        3
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q7_id, 'RSA', TRUE);

-- Question 8: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'Which of the following is considered a secure password?',
        'multiple_choice',
        3
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q8_id, 'P@ssw0rd123!', TRUE),
    (@q8_id, 'password', FALSE),
    (@q8_id, '123456', FALSE),
    (@q8_id, 'qwerty', FALSE);

-- Question 9: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'True or False: Phishing emails can include malicious attachments or links.',
        'true_false',
        3
    );

SET @q9_id = LAST_INSERT_ID();

-- Answers for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'True', TRUE),
    (@q9_id, 'False', FALSE);

-- Question 10: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level3,
        'What type of malware replicates itself and spreads to other computers?',
        'multiple_choice',
        3
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q10_id, 'Worm', TRUE),
    (@q10_id, 'Virus', FALSE),
    (@q10_id, 'Trojan', FALSE),
    (@q10_id, 'Spyware', FALSE);

-- Insert Level 4 Security Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Security Quiz',
        'Test your advanced knowledge of security concepts.',
        4
    );

SET @security_quiz_id_level4 = LAST_INSERT_ID();

-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'What is the main difference between symmetric and asymmetric encryption?',
        'multiple_choice',
        4
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Symmetric encryption uses one key; asymmetric uses two keys (public and private).',
        TRUE
    ),
    (
        @q1_id,
        'Symmetric encryption is faster than asymmetric but less secure.',
        FALSE
    ),
    (
        @q1_id,
        'Asymmetric encryption does not use keys.',
        FALSE
    ),
    (
        @q1_id,
        'Symmetric encryption requires two separate keys.',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'True or False: Multi-factor authentication (MFA) only involves a password and a PIN.',
        'true_false',
        4
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'Name the cybersecurity framework developed by the U.S. National Institute of Standards and Technology (NIST).',
        'written',
        4
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'NIST Cybersecurity Framework',
        TRUE
    );

-- Question 4: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'What is the purpose of penetration testing in cybersecurity?',
        'multiple_choice',
        4
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q4_id,
        'To identify security vulnerabilities before they can be exploited.',
        TRUE
    ),
    (
        @q4_id,
        'To create malware for testing purposes.',
        FALSE
    ),
    (
        @q4_id,
        'To install antivirus software.',
        FALSE
    ),
    (
        @q4_id,
        'To monitor network traffic for anomalies.',
        FALSE
    );

-- Question 5: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'True or False: HTTPS ensures data encryption during transmission between client and server.',
        'true_false',
        4
    );

SET @q5_id = LAST_INSERT_ID();

-- Answers for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'True', TRUE),
    (@q5_id, 'False', FALSE);

-- Question 6: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'What is a zero-day exploit?',
        'multiple_choice',
        4
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q6_id,
        'A software vulnerability that is exploited before the vendor has issued a patch.',
        TRUE
    ),
    (
        @q6_id,
        'A type of firewall that monitors zero traffic.',
        FALSE
    ),
    (
        @q6_id,
        'An attack that occurs on the first day of software release.',
        FALSE
    ),
    (
        @q6_id,
        'A malware that cannot be detected by antivirus programs.',
        FALSE
    );

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'What does IDS stand for in cybersecurity?',
        'written',
        4
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q7_id,
        'Intrusion Detection System',
        TRUE
    );

-- Question 8: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'Which of the following describes ransomware?',
        'multiple_choice',
        4
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q8_id,
        'Malware that encrypts a victim’s data and demands payment for the decryption key.',
        TRUE
    ),
    (
        @q8_id,
        'A virus that steals banking information.',
        FALSE
    ),
    (
        @q8_id,
        'Software that displays unwanted ads.',
        FALSE
    ),
    (
        @q8_id,
        'A program that monitors user activity.',
        FALSE
    );

-- Question 9: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'True or False: Phishing can only occur through emails.',
        'true_false',
        4
    );

SET @q9_id = LAST_INSERT_ID();

-- Answers for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'True', FALSE),
    (@q9_id, 'False', TRUE);

-- Question 10: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level4,
        'What does a firewall do in a network?',
        'multiple_choice',
        4
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q10_id,
        'Monitors and controls incoming and outgoing network traffic based on security rules.',
        TRUE
    ),
    (
        @q10_id,
        'Scans for viruses on a computer.',
        FALSE
    ),
    (
        @q10_id,
        'Ensures data backup for a network.',
        FALSE
    ),
    (
        @q10_id,
        'Prevents physical access to the server.',
        FALSE
    );

-- Insert Level 5 Security Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Security Quiz',
        'Test your advanced knowledge of security concepts.',
        5
    );

SET @security_quiz_id_level5 = LAST_INSERT_ID();

-- Level 5 Quiz Questions
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'What does the CIA triad in cybersecurity stand for?',
        'multiple_choice',
        5
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Confidentiality, Integrity, and Availability',
        TRUE
    ),
    (
        @q1_id,
        'Confidentiality, Information, and Access',
        FALSE
    ),
    (
        @q1_id,
        'Communication, Integrity, and Access',
        FALSE
    ),
    (
        @q1_id,
        'Compliance, Identification, and Access',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'True or False: A VPN (Virtual Private Network) hides your IP address and encrypts your data.',
        'true_false',
        5
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', TRUE),
    (@q2_id, 'False', FALSE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'Name a common tool used for network penetration testing.',
        'written',
        5
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q3_id, 'Nmap', TRUE);

-- Question 4: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'What is social engineering in the context of cybersecurity?',
        'multiple_choice',
        5
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q4_id,
        'Manipulating people into giving confidential information.',
        TRUE
    ),
    (
        @q4_id,
        'A method for encrypting data.',
        FALSE
    ),
    (
        @q4_id,
        'A type of firewall configuration.',
        FALSE
    ),
    (
        @q4_id,
        'A form of network protocol.',
        FALSE
    );

-- Question 5: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'True or False: Phishing attacks can be prevented by using multi-factor authentication.',
        'true_false',
        5
    );

SET @q5_id = LAST_INSERT_ID();

-- Answers for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'True', FALSE),
    (@q5_id, 'False', TRUE);

-- Question 6: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'Which of the following best describes a honeypot?',
        'multiple_choice',
        5
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q6_id,
        'A security mechanism set up to lure attackers and study their behavior.',
        TRUE
    ),
    (
        @q6_id,
        'A device used for encrypting network traffic.',
        FALSE
    ),
    (
        @q6_id,
        'A type of malware that encrypts data.',
        FALSE
    ),
    (
        @q6_id,
        'An authentication method for secure logins.',
        FALSE
    );

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'What does DDoS stand for?',
        'written',
        5
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q7_id,
        'Distributed Denial of Service',
        TRUE
    );

-- Question 8: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'Which type of malware disguises itself as legitimate software?',
        'multiple_choice',
        5
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q8_id, 'Trojan', TRUE),
    (@q8_id, 'Worm', FALSE),
    (@q8_id, 'Ransomware', FALSE),
    (@q8_id, 'Spyware', FALSE);

-- Question 9: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'True or False: SSL/TLS certificates are used to secure email communications.',
        'true_false',
        5
    );

SET @q9_id = LAST_INSERT_ID();

-- Answers for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'True', TRUE),
    (@q9_id, 'False', FALSE);

-- Question 10: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level5,
        'Which protocol is often used to secure data transferred between a web server and a browser?',
        'multiple_choice',
        5
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q10_id, 'HTTPS', TRUE),
    (@q10_id, 'FTP', FALSE),
    (@q10_id, 'SMTP', FALSE),
    (@q10_id, 'HTTP', FALSE);

-- Insert Level 6 Security Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Security Quiz',
        'Test your advanced knowledge of security concepts.',
        6
    );

SET @security_quiz_id_level6 = LAST_INSERT_ID();

-- Level 6 Quiz Questions
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'What is the main function of a firewall?',
        'multiple_choice',
        6
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'To filter incoming and outgoing network traffic.',
        TRUE
    ),
    (
        @q1_id,
        'To encrypt data on the network.',
        FALSE
    ),
    (
        @q1_id,
        'To provide multi-factor authentication.',
        FALSE
    ),
    (
        @q1_id,
        'To scan for viruses on the network.',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: Ransomware can only spread through email attachments.',
        'true_false',
        6
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'What does the term "phishing" refer to in cybersecurity?',
        'written',
        6
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'A type of cyberattack where attackers deceive users to reveal personal information.',
        TRUE
    );

-- Question 4: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which cybersecurity tool monitors network traffic for suspicious activity?',
        'multiple_choice',
        6
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q4_id,
        'Intrusion Detection System (IDS)',
        TRUE
    ),
    (@q4_id, 'Firewall', FALSE),
    (
        @q4_id,
        'Antivirus Software',
        FALSE
    ),
    (@q4_id, 'VPN', FALSE);

-- Question 5: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: Two-factor authentication (2FA) only uses a password and a mobile phone.',
        'true_false',
        6
    );

SET @q5_id = LAST_INSERT_ID();

-- Answers for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q5_id, 'True', FALSE),
    (@q5_id, 'False', TRUE);

-- Question 6: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'What does SSL stand for in web security?',
        'multiple_choice',
        6
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q6_id,
        'Secure Sockets Layer',
        TRUE
    ),
    (
        @q6_id,
        'Simple Security Layer',
        FALSE
    ),
    (
        @q6_id,
        'System Security Lock',
        FALSE
    ),
    (
        @q6_id,
        'Secure Service Line',
        FALSE
    );

-- Question 7: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: A VPN hides your internet traffic by encrypting it.',
        'true_false',
        6
    );

SET @q7_id = LAST_INSERT_ID();

-- Answers for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q7_id, 'True', TRUE),
    (@q7_id, 'False', FALSE);

-- Question 8: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Define the principle of "least privilege" in cybersecurity.',
        'written',
        6
    );

SET @q8_id = LAST_INSERT_ID();

-- Correct answer for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q8_id,
        'Granting users only the access necessary to perform their job functions.',
        TRUE
    );

-- Question 9: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which of the following is considered a type of social engineering attack?',
        'multiple_choice',
        6
    );

SET @q9_id = LAST_INSERT_ID();

-- Answers for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'Phishing', TRUE),
    (
        @q9_id,
        'Brute-force attack',
        FALSE
    ),
    (
        @q9_id,
        'SQL injection',
        FALSE
    ),
    (@q9_id, 'DDoS attack', FALSE);

-- Question 10: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: Malware cannot be spread through infected USB drives.',
        'true_false',
        6
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q10_id, 'True', FALSE),
    (@q10_id, 'False', TRUE);

-- Continue with questions 11-20 using the same structure for Level 6, including multiple choice, true/false, and written questions covering topics like malware, security protocols, cryptography basics, and network defense mechanisms.

-- Question 11: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which of these is a secure method for storing passwords?',
        'multiple_choice',
        6
    );

SET @q11_id = LAST_INSERT_ID();

-- Answers for Question 11
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q11_id,
        'Hashing with a salt',
        TRUE
    ),
    (
        @q11_id,
        'Plain text storage',
        FALSE
    ),
    (
        @q11_id,
        'Encryption without keys',
        FALSE
    ),
    (
        @q11_id,
        'Using MD5 without a salt',
        FALSE
    );

-- Question 12: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: Passwords should be changed every 90 days.',
        'true_false',
        6
    );

SET @q12_id = LAST_INSERT_ID();

-- Answers for Question 12
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q12_id, 'True', FALSE),
    (@q12_id, 'False', TRUE);

-- Question 13: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Explain the process of creating a secure password.',
        'written',
        6
    );

SET @q13_id = LAST_INSERT_ID();

-- Correct answer for Question 13
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q13_id,
        'Create a password that is easy to remember, includes a mix of uppercase and lowercase letters, numbers, and special characters, and is at least 12
characters long.',
        TRUE
    );

-- Question 14: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which of the following is a security protocol used for encrypting data in transit between two devices?',
        'multiple_choice',
        6
    );

SET @q14_id = LAST_INSERT_ID();

-- Answers for Question 14
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q14_id, 'SSL/TLS', TRUE),
    (@q14_id, 'IPSec', FALSE),
    (@q14_id, 'SSH', FALSE),
    (
        @q14_id,
        'Datagram Transport Layer Security (DTLS)',
        FALSE
    );

-- Question 15: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: A firewall is a network security system that monitors and controls incoming and outgoing network traffic.',
        'true_false',
        6
    );

-- Answers for Question 15
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q15_id, 'True', FALSE),
    (@q15_id, 'False', TRUE);

-- Question 16: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'What is the purpose of a firewall?',
        'written',
        6
    );

SET @q16_id = LAST_INSERT_ID();

-- Correct answer for Question 16
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q16_id,
        'To monitor and control incoming and outgoing network traffic to prevent unauthorized access or to protect against potential threats.',
        TRUE
    );

-- Question 17: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which of the following is a method used to protect against SQL injection attacks?',
        'multiple_choice',
        6
    );

SET @q17_id = LAST_INSERT_ID();

-- Answers for Question 17
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q17_id,
        'Input validation',
        TRUE
    ),
    (
        @q17_id,
        'Output encoding',
        FALSE
    ),
    (
        @q17_id,
        'Input sanitization',
        FALSE
    ),
    (
        @q17_id,
        'Input encoding',
        FALSE
    );

-- Question 11: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: Symmetric key encryption uses the same key for both encryption and decryption.',
        'true_false',
        6
    );

SET @q11_id = LAST_INSERT_ID();

-- Answers for Question 11
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q11_id, 'True', TRUE),
    (@q11_id, 'False', FALSE);

-- Question 12: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'What does IDS stand for in network security?',
        'multiple_choice',
        6
    );

SET @q12_id = LAST_INSERT_ID();

-- Answers for Question 12
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q12_id,
        'Intrusion Detection System',
        TRUE
    ),
    (
        @q12_id,
        'Internet Data Service',
        FALSE
    ),
    (
        @q12_id,
        'Information Defense System',
        FALSE
    ),
    (
        @q12_id,
        'Internal Data Security',
        FALSE
    );

-- Question 13: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Explain what "two-factor authentication" (2FA) is.',
        'written',
        6
    );

SET @q13_id = LAST_INSERT_ID();

-- Correct answer for Question 13
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q13_id,
        'A security process where a user provides two different authentication factors to verify themselves.',
        TRUE
    );

-- Question 14: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which cryptographic method is used to ensure data integrity?',
        'multiple_choice',
        6
    );

SET @q14_id = LAST_INSERT_ID();

-- Answers for Question 14
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q14_id, 'Hashing', TRUE),
    (
        @q14_id,
        'Symmetric encryption',
        FALSE
    ),
    (
        @q14_id,
        'Public key encryption',
        FALSE
    ),
    (
        @q14_id,
        'Steganography',
        FALSE
    );

-- Question 15: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: A brute-force attack uses a dictionary of common words and phrases to guess passwords.',
        'true_false',
        6
    );

SET @q15_id = LAST_INSERT_ID();

-- Answers for Question 15
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q15_id, 'True', FALSE),
    (@q15_id, 'False', TRUE);

-- Question 16: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which of these is an example of a man-in-the-middle (MITM) attack?',
        'multiple_choice',
        6
    );

SET @q16_id = LAST_INSERT_ID();

-- Answers for Question 16
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q16_id,
        'Intercepting communications between two parties to steal information',
        TRUE
    ),
    (
        @q16_id,
        'A phishing email',
        FALSE
    ),
    (
        @q16_id,
        'A DDoS attack',
        FALSE
    ),
    (
        @q16_id,
        'A ransomware attack',
        FALSE
    );

-- Question 17: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'What is a firewall and its primary function?',
        'written',
        6
    );

SET @q17_id = LAST_INSERT_ID();

-- Correct answer for Question 17
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q17_id,
        'A network security device or software that monitors and filters incoming and outgoing traffic based on security rules.',
        TRUE
    );

-- Question 18: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'True or False: Public key infrastructure (PKI) involves using two keys: one public and one private.',
        'true_false',
        6
    );

SET @q18_id = LAST_INSERT_ID();

-- Answers for Question 18
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q18_id, 'True', TRUE),
    (@q18_id, 'False', FALSE);

-- Question 19: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Which of the following is not a type of malware?',
        'multiple_choice',
        6
    );

SET @q19_id = LAST_INSERT_ID();

-- Answers for Question 19
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q19_id, 'Spyware', FALSE),
    (@q19_id, 'Trojan', FALSE),
    (@q19_id, 'Firewall', TRUE),
    (@q19_id, 'Worm', FALSE);

-- Question 20: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level6,
        'Describe the purpose of an intrusion prevention system (IPS).',
        'written',
        6
    );

SET @q20_id = LAST_INSERT_ID();

-- Correct answer for Question 20
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q20_id,
        'A network security system that detects and prevents identified threats in real time.',
        TRUE
    );

-- Insert Level 7 Security Quiz
INSERT INTO
    quizzes (title, description, level)
VALUES (
        'Security Quiz',
        'Test your advanced knowledge of security concepts.',
        7
    );

SET @security_quiz_id_level7 = LAST_INSERT_ID();

-- Level 7 Quiz Questions
-- Question 1: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'Which cryptographic method uses a pair of keys for encryption and decryption?',
        'multiple_choice',
        7
    );

SET @q1_id = LAST_INSERT_ID();

-- Answers for Question 1
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q1_id,
        'Asymmetric cryptography',
        TRUE
    ),
    (
        @q1_id,
        'Symmetric cryptography',
        FALSE
    ),
    (@q1_id, 'Hashing', FALSE),
    (
        @q1_id,
        'Digital signatures',
        FALSE
    );

-- Question 2: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'True or False: A zero-day vulnerability is a flaw that has been fixed and publicized.',
        'true_false',
        7
    );

SET @q2_id = LAST_INSERT_ID();

-- Answers for Question 2
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q2_id, 'True', FALSE),
    (@q2_id, 'False', TRUE);

-- Question 3: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'Explain what a security patch is.',
        'written',
        7
    );

SET @q3_id = LAST_INSERT_ID();

-- Correct answer for Question 3
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q3_id,
        'A software update designed to fix vulnerabilities or bugs in a system.',
        TRUE
    );

-- Question 4: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'What is the role of penetration testing in cybersecurity?',
        'multiple_choice',
        7
    );

SET @q4_id = LAST_INSERT_ID();

-- Answers for Question 4
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q4_id,
        'To identify security vulnerabilities by simulating a cyberattack.',
        TRUE
    ),
    (
        @q4_id,
        'To encrypt data on the network.',
        FALSE
    ),
    (
        @q4_id,
        'To replace outdated software.',
        FALSE
    ),
    (
        @q4_id,
        'To monitor user activity.',
        FALSE
    );

-- Question 5: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'What is a honeypot in cybersecurity?',
        'multiple_choice',
        7
    );

SET @q5_id = LAST_INSERT_ID();

-- Answers for Question 5
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q5_id,
        'A decoy system set up to attract and detect potential attackers',
        TRUE
    ),
    (
        @q5_id,
        'A type of malware that replicates itself',
        FALSE
    ),
    (
        @q5_id,
        'A data encryption method',
        FALSE
    ),
    (
        @q5_id,
        'An antivirus tool',
        FALSE
    );

-- Question 6: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'True or False: Advanced Persistent Threats (APTs) are short-term attacks.',
        'true_false',
        7
    );

SET @q6_id = LAST_INSERT_ID();

-- Answers for Question 6
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q6_id, 'True', FALSE),
    (@q6_id, 'False', TRUE);

-- Question 7: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'What does the term "zero trust" mean in cybersecurity?',
        'written',
        7
    );

SET @q7_id = LAST_INSERT_ID();

-- Correct answer for Question 7
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q7_id,
        'A security framework that assumes no implicit trust and requires verification from everyone trying to access resources.',
        TRUE
    );

-- Question 8: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'Which of these is a type of malware that uses a pre-existing exploit to gain unauthorized access?',
        'multiple_choice',
        7
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q8_id, 'Ransomware', TRUE),
    (@q8_id, 'Phishing', FALSE),
    (@q8_id, 'Exploit kits', FALSE),
    (
        @q8_id,
        'Vulnerabilities',
        FALSE
    );

-- Question 9: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'True or False: A vulnerability in a system can be exploited to gain unauthorized access.',
        'true_false',
        7
    );

SET @q10_id = LAST_INSERT_ID();

-- Answers for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q10_id, 'True', FALSE),
    (@q10_id, 'False', TRUE);

-- Question 8: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'What is a zero-day vulnerability?',
        'multiple_choice',
        7
    );

SET @q8_id = LAST_INSERT_ID();

-- Answers for Question 8
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q8_id,
        'A security flaw unknown to the software vendor that is exploited before a fix is available',
        TRUE
    ),
    (
        @q8_id,
        'An outdated security protocol',
        FALSE
    ),
    (
        @q8_id,
        'A redundant security feature',
        FALSE
    ),
    (
        @q8_id,
        'A known bug that is ignored',
        FALSE
    );

-- Question 9: True or False
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'True or False: Ransomware attacks typically involve the encryption of victim data to extort payment.',
        'true_false',
        7
    );

SET @q9_id = LAST_INSERT_ID();

-- Answers for Question 9
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (@q9_id, 'True', TRUE),
    (@q9_id, 'False', FALSE);

-- Question 10: Written
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'Explain the concept of "social engineering" in cybersecurity.',
        'written',
        7
    );

SET @q10_id = LAST_INSERT_ID();

-- Correct answer for Question 10
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q10_id,
        'Manipulating individuals to reveal confidential information through deceptive means.',
        TRUE
    );

-- Question 11: Multiple Choice
INSERT INTO
    questions (
        quiz_id,
        question_text,
        question_type,
        level
    )
VALUES (
        @security_quiz_id_level7,
        'Which protocol is known for encrypting internet communication?',
        'multiple_choice',
        7
    );

SET @q11_id = LAST_INSERT_ID();

-- Answers for Question 11
INSERT INTO
    answers (
        question_id,
        answer_text,
        is_correct
    )
VALUES (
        @q11_id,
        'TLS (Transport Layer Security)',
        TRUE
    ),
    (
        @q11_id,
        'FTP (File Transfer Protocol)',
        FALSE
    ),
    (
        @q11_id,
        'HTTP (Hypertext Transfer Protocol)',
        FALSE
    ),
    (
        @q11_id,
        'SMTP (Simple Mail Transfer Protocol)',
        FALSE
    );
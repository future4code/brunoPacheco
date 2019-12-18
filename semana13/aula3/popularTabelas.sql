use bruno;

INSERT INTO editoras VALUES
(1,'Black Swan','Illinois','1964-02-11 00:00:00'),
(2,'Vermilion','New York','1971-03-01 00:00:00'),
(3,'Orion (an Imprint of The Orion','California','1989-12-05 00:00:00'),
(4,'Definitions','Alabama','1973-10-28 00:00:00'),
(5,'Corgi Books','Indiana','1981-12-10 00:00:00'),
(6,'Bantam Press','Texas','1968-06-25 00:00:00'),
(7,'Puffin Books','Indiana','1961-12-10 00:00:00'),
(8,'Penguin Books','California','1977-03-03 00:00:00'),
(9,'Thorsons','California','2000-04-01 00:00:00'),
(10,'Minerva','Texas','1993-09-15 00:00:00'),
(11,'Macmillan Children''s Books','Arizona','1966-09-17 00:00:00'),
(12,'Vintage','South Carolina','1992-05-28 00:00:00'),
(13,'Picador','Louisiana','1992-02-14 00:00:00'),
(14,'Century','Minnesota','1986-04-27 00:00:00'),
(15,'Arrow Books','New Mexico','1970-09-29 00:00:00'),
(16,'Headline Review','Florida','2001-11-02 00:00:00'),
(17,'Bloomsbury Publishing PLC','Florida','1966-11-24 00:00:00'),
(18,'HarperCollins Publishers','Florida','1977-12-31 00:00:00'),
(19,'Quercus','Arizona','1983-08-10 00:00:00'),
(20,'Quercus Publishing Plc','Washington','1991-09-02 00:00:00'),
(21,'Chatto & Windus','Oregon','1987-07-29 00:00:00'),
(22,'Canongate Books','Ohio','1975-05-18 00:00:00'),
(23,'Abacus','Missouri','1959-06-20 00:00:00'),
(24,'Flamingo','California','1974-02-14 00:00:00'),
(25,'Michael Joseph','Connecticut','1983-02-04 00:00:00'),
(26,'ATOM','Georgia','1980-03-11 00:00:00'),
(27,'Pan Books','California','1969-09-24 00:00:00'),
(28,'Time Warner Books','Georgia','1966-12-30 00:00:00'),
(29,'Point','Georgia','1973-01-25 00:00:00'),
(30,'BBC Books (Random House)','New York','1960-05-13 00:00:00'),
(31,'Profile Books','Georgia','1969-10-21 00:00:00');

insert into autores(id,primeiro_nome,ultimo_nome) 
VALUES (1,'Monica','Ali'),
(2,'Robert C.','Atkins'),
(3,'Linwood','Barclay'),
(4,'John','Boyne'),
(5,'Dan','Brown'),
(6,'Bill','Bryson'),
(7,'Eric','Carle'),
(8,'Jeremy','Clarkson'),
(9,'Paulo','Coelho'),
(10,'Louis','De Bernieres'),
(11,'Julia','Donaldson'),
(12,'Kim','Edwards'),
(13,'Sebastian','Faulks'),
(14,'Helen','Fielding'),
(15,'Dawn','French'),
(16,'Arthur','Golden'),
(17,'John','Grisham'),
(18,'Mark','Haddon'),
(19,'Joanne','Harris'),
(20,'Victoria','Hislop'),
(21,'Khaled','Hosseini'),
(22,'Conn & Iggulden','Iggulden'),
(23,'Peter','Kay'),
(24,'Marian','Keyes'),
(25,'Sophie','Kinsella'),
(26,'Stieg','Larsson'),
(27,'Nigella','Lawson'),
(28,'Harper','Lee'),
(29,'Andrea','Levy'),
(30,'Marina','Lewycka'),
(31,'Yann','Martel'),
(32,'Alexander','McCall Smith'),
(33,'Frank','McCourt'),
(34,'Ian','McEwan'),
(35,'Gillian','McKeith'), 
(36,'Paul','McKenna'),
(37,'Stephenie','Meyer'),
(38,'Michael','Moore'),
(39,'Kate','Morton'),
(40,'Kate','Mosse'), 
(41,'Audrey','Niffenegger'),
(42,'Paul','O''Grady'), 
(43,'Barack','Obama'),
(44,'Jamie','Oliver'),
(45,'Sharon','Osbourne'),
(46,'Tony','Parsons'),
(47,'Dave','Pelzer'),
(48,'Philip','Pullman'),
(49,'J. K.','Rowling'), 
(50,'Jed','Rubenfeld'),
(51,'J.D.','Salinger'),
(52,'Ben','Schott'),
(53,'Alice','Sebold'), 
(54,'Delia','Smith'),
(55,'Zadie','Smith'),
(56,'Pamela','Stephenson'),
(57,'Lynne','Truss'),
(58,'Lauren','Weisberger'), 
(59,'Markus','Zusak');

describe autores;

alter table autores 
change nacionalidade nacionalidade varchar(100) null;

INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (1, 'Brick Lane',1,1,'2004-05-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (2, 'Dr. Atkins'' New Diet Revolution:The No-hunger, Luxurious Weight Loss P',2,2,'2003-01-02');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (3, 'No Time for Goodbye',3,3,'2008-06-12');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (4, 'Boy in the Striped Pyjamas,The',4,4,'2007-02-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (5, 'Da Vinci Code,The',5,5,'2004-03-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (6, 'Angels and Demons',5,5,'2003-07-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (7, 'Deception Point',5,5,'2004-05-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (8, 'Digital Fortress',5,5,'2004-03-05');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (9, 'Lost Symbol,The',5,6,'2009-09-15');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (10, 'Lost Symbol,The',5,5,'2010-07-22');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (11, 'Short History of Nearly Everything,A',6,1,'2004-06-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (12, 'Notes from a Small Island',6,1,'1996-08-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (13, 'Down Under',6,1,'2001-08-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (14, 'Very Hungry Caterpillar,The:The Very Hungry Caterpillar',7,7,'1994-09-29');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (15, 'World According to Clarkson,The',8,8,'2005-05-26');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (16, 'I Know You Got Soul',8,8,'2006-05-25');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (17, 'Alchemist,The:A Fable About Following Your Dream',9,9,'1999-09-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (18, 'Captain Corelli''s Mandolin',10,10,'1995-06-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (19, 'Gruffalo,The',11,11,'2009-03-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (20, 'Memory Keeper''s Daughter,The',12,8,'2007-04-26');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (21, 'Birdsong',13,12,'1994-07-18');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (22, 'Bridget Jones: The Edge of Reason',14,13,'2000-06-15');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (23, 'Bridget Jones''s Diary:A Novel',14,13,'1997-06-20');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (24, 'Dear Fatty',15,14,'2008-10-09');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (25, 'Memoirs of a Geisha',16,12,'1998-06-04');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (26, 'Broker,The',17,15,'2005-08-27');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (27, 'Summons,The',17,15,'2002-09-28');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (28, 'Curious Incident of the Dog in the Night-time,The',18,12,'2004-04-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (29, 'Spot of Bother,A',18,12,'2007-06-07');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (30, 'Chocolat',19,1,'2000-03-02');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (31, 'Island,The',20,16,'2006-04-10');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (32, 'Kite Runner,The',21,17,'2004-06-07');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (33, 'Thousand Splendid Suns,A',21,17,'2007-05-22');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (34, 'Dangerous Book for Boys,The',22,18,'2006-06-05');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (35, 'Sound of Laughter,The',23,14,'2006-10-05');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (36, 'Anybody Out There?',24,8,'2007-02-08');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (37, 'Undomestic Goddess,The',25,1,'2006-01-02');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (38, 'Can You Keep a Secret?',25,1,'2003-03-17');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (39, 'Girl with the Dragon Tattoo,The:Millennium Trilogy',26,19,'2008-07-24');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (40, 'Girl Who Played With Fire,The:Millennium Trilogy',26,20,'2010-07-29');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (41, 'Girl Who Kicked the Hornets'' Nest,The:Millennium Trilogy',26,20,'2010-04-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (42, 'Nigella Express',27,21,'2007-09-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (43, 'To Kill a Mockingbird',28,15,'1989-10-05');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (44, 'Small Island',29,16,'2004-09-13');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (45, 'Short History of Tractors in Ukrainian,A',30,8,'2006-03-02');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (46, 'Life of Pi',31,22,'2003-05-17');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (47, 'No.1 Ladies'' Detective Agency,The:No.1 Ladies'' Detective Agency S.',32,23,'2003-06-05');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (48, 'Angela''s Ashes:A Memoir of a Childhood',33,24,'1997-05-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (49, 'Atonement',34,12,'2002-05-02');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (50, 'You are What You Eat:The Plan That Will Change Your Life',35,25,'2004-06-17');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (51, 'I Can Make You Thin',36,6,'2005-01-17');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (52, 'Twilight',37,26,'2007-03-22');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (53, 'New Moon',37,26,'2007-09-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (54, 'Eclipse',37,26,'2008-07-03');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (55, 'Breaking Dawn',37,26,'2008-08-04');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (56, 'Stupid White Men:...and Other Sorry Excuses for the State of the Natio',38,8,'2002-10-03');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (57, 'House at Riverton,The',39,27,'2007-06-15');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (58, 'Labyrinth',40,3,'2006-01-11');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (59, 'Time Traveler''s Wife,The',41,12,'2004-05-29');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (60, 'At My Mother''s Knee ...:and Other Low Joints',42,6,'2008-09-24');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (61, 'Dreams from My Father:A Story of Race and Inheritance',43,22,'2008-06-05');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (62, 'Jamie''s 30-minute Meals',44,25,'2010-09-30');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (63, 'Jamie''s Italy',44,25,'2005-10-03');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (64, 'Jamie''s Ministry of Food:Anyone Can Learn to Cook in 24 Hours',44,25,'2008-10-03');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (65, 'Jamie at Home:Cook Your Way to the Good Life',44,25,'2007-09-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (66, 'Return of the Naked Chef,The',44,25,'2000-03-30');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (67, 'Happy Days with the Naked Chef',44,25,'2001-09-03');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (68, 'Sharon Osbourne Extreme:My Autobiography',45,28,'2005-10-03');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (69, 'Man and Boy',46,18,'2000-03-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (70, 'Child Called It,A',47,3,'2001-01-04');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (71, 'Northern Lights:His Dark Materials S.',48,29,'1998-10-23');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (72, 'Subtle Knife,The:His Dark Materials S.',48,29,'1998-10-16');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (73, 'Amber Spyglass,The:His Dark Materials S.',48,29,'2001-09-14');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (74, 'Harry Potter and the Philosopher''s Stone',49,17,'1997-06-26');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (75, 'Harry Potter and the Chamber of Secrets',49,17,'1999-04-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (76, 'Harry Potter and the Order of the Phoenix',49,17,'2003-06-21');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (77, 'Harry Potter and the Half-blood Prince:Children''s Edition',49,17,'2005-07-16');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (78, 'Harry Potter and the Deathly Hallows',49,17,'2007-07-21');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (79, 'Harry Potter and the Prisoner of Azkaban',49,17,'2000-04-01');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (80, 'Harry Potter and the Goblet of Fire',49,17,'2001-07-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (81, 'Harry Potter and the Goblet of Fire',49,17,'2000-07-08');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (82, 'Harry Potter and the Deathly Hallows',49,17,'2007-07-21');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (83, 'Tales of Beedle the Bard,The',49,17,'2008-12-04');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (84, 'Harry Potter and the Order of the Phoenix',49,17,'2004-07-10');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (85, 'Harry Potter and the Half-blood Prince',49,17,'2005-07-16');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (86, 'Interpretation of Murder,The',50,16,'2007-01-15');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (87, 'Catcher in the Rye,The',51,8,'1994-08-04');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (88, 'Schott''s Original Miscellany',52,17,'2002-11-04');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (89, 'Lovely Bones,The',53,13,'2009-12-04');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (90, 'Delia''s How to Cook:(Bk.1)',54,30,'1998-10-12');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (91, 'Delia''s How to Cook:(Bk.2)',54,30,'1999-12-09');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (92, 'White Teeth',55,8,'2001-01-25');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (93, 'Billy Connolly',56,18,'2002-07-08');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (94, 'Eats, Shoots and Leaves:The Zero Tolerance Approach to Punctuation',57,31,'2003-11-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (95, 'Devil Wears Prada,The',58,18,'2003-10-06');
INSERT INTO livros(id, titulo,autor_id,editora_id,ano) VALUES (96, 'Book Thief,The',59,1,'2008-01-01');

describe livros;

alter table livros 
drop column editora;

CREATE TABLE collection (
	id int(11) not null PRIMARY KEY AUTO_INCREMENT,
    answer varchar(400) not null,
    date datetime not null
);

INSERT INTO collection (answer) VALUES (006);

SELECT * FROM collection where id='1' AND answer="001"

SELECT * FROM collection ORDER BY id DESC

? SELECT * FROM collection GROUP BY (10)

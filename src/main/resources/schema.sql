CREATE TABLE Movies (
    film VARCHAR(25) NOT NULL,
    PRIMARY KEY (film)
);

CREATE TABLE Billett(
    id SMALLINT NOT NULL  AUTO_INCREMENT,
    lname VARCHAR (13) NOT NULL,
    fname VARCHAR (13) NOT NULL,
    quantity VARCHAR (2) NOT NULL,
    phonenr CHAR (8) NOT NULL,
    epost VARCHAR (20) NOT NULL,
    film VARCHAR (25) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (film) REFERENCES Movies(film)
);

INSERT INTO Movies(film) VALUES ('LA LA Land');
INSERT INTO Movies(film) VALUES ('When Marnie was there');
INSERT INTO Movies(film) VALUES ('Howls Moving Castle');
INSERT INTO Movies(film) VALUES ('Totoro');
INSERT INTO Movies(film) VALUES ('Kikis delivery service');
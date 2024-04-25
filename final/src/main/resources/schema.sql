
CREATE TABLE Billetter(
    id int auto_increment,
    lname VARCHAR (22) NOT NULL ,
    fname VARCHAR (22) NOT NULL ,
    quantity VARCHAR (2) NOT NULL,
    phonenr CHAR (8) NOT NULL,
    epost VARCHAR (233) NOT NULL,
    film VARCHAR (223) NOT NULL,
    PRIMARY KEY (id)
);


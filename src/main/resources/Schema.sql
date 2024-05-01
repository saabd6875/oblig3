
CREATE TABLE IF NOT EXISTS `billett` (
     `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
     `lname` VARCHAR(50)NOT NULL,
     `fname` VARCHAR(50) NOT NULL,
     `phonenr` CHAR(50) NOT NULL,
     `epost` VARCHAR(233) NOT NULL,
     `quantity` VARCHAR(50) NOT NULL,
     `film` VARCHAR(233) NOT NULL
);
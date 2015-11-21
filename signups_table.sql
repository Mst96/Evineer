CREATE TABLE `signups` (
    `signup_id`			INT(11)			NOT NULL	AUTO_INCREMENT,
    `email`				VARCHAR(255)	NOT NULL,
    `hostname`			VARCHAR(255)	NOT NULL,
    `created_on`		TIMESTAMP		NOT NULL	DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`signup_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

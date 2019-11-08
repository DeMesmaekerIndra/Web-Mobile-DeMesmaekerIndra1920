-- phpMyAdmin SQL Dump
-- version 3.5.8.1
-- http://www.phpmyadmin.net
--
-- Generation Time: Oct 21, 2018 at 09:18 PM
-- Server version: 10.1.30-MariaDB-1~xenial
-- PHP Version: 5.4.45-0+deb7u13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--------------------------------------------------------

--
-- Table structure for table `producten`
--

CREATE TABLE IF NOT EXISTS `producten` (
  `PR_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PR_CT_ID` int(11) NOT NULL,
  `PR_naam` varchar(50) CHARACTER SET utf8 NOT NULL,
  `prijs` double NOT NULL,
  PRIMARY KEY (`PR_ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=135 ;

--
-- Dumping data for table `producten`
--

INSERT INTO `producten` (`PR_ID`, `PR_CT_ID`, `PR_naam`, `prijs`) VALUES
(112, 2, 'Appel', 10),
(113, 2, 'Granaatappel', 20),
(114, 2, 'Boemkool', 15),
(133, 1, 'Banaanaanwagen', 10),
(132, 1, 'Framboos', 3),
(131, 2, 'Andrijvie', 1.5),
(123, 1, 'Bananasplit', 5),
(122, 1, 'Hanananas', 5),
(121, 1, 'Zuurpruim', -10),
(124, 2, 'Ui', 2),
(130, 1, 'Skiwi', 2),
(126, 1, 'Spruitjes', 5),
(127, 1, 'GestoofdePeren', 5),
(128, 1, 'Gebakken peren', 10);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

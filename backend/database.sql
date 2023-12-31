-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: dpcda_database
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `rabbit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rabbit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `affixe` varchar(255) NOT NULL,
  `sexe` enum('Mâle', 'Femelle', 'Indéfini') DEFAULT 'Indéfini',
  `birthday` date NOT NULL,
  `color` varchar(100) NOT NULL,
  `eyes` varchar(100) DEFAULT NULL,
  `pedigree` text DEFAULT NULL,
  `weight` varchar(100) DEFAULT NULL,
  `status` enum('reproducteur', 'baby') DEFAULT 'reproducteur',
  `reservation` enum('Réservé', 'Disponible') DEFAULT 'Disponible',
  `photo` varchar(255) NOT NULL,
  `introduction` text(500) DEFAULT NULL,
  `arrival_date` date NOT NULL,
  `tattoo` varchar(100) DEFAULT NULL,
  `breeding_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rabbit`
--

LOCK TABLES `rabbit` WRITE;
/*!40000 ALTER TABLE `rabbit` DISABLE KEYS */;
INSERT INTO `rabbit` VALUES (1,'Ekor','Yarmidasplace', 'Mâle','07/11/2018', 'Fauve', 'Yeux marrons', '...', '1035g', 'reproducteur', 'Disponible', '338839789_1214924052548339_191260099021626376_n.jpg', 'Doux et serein, Gentleman. Véritable globe trotteur.', '10/12/2022', 'Tatoué 8EL-0911',1);
/*!40000 ALTER TABLE `rabbit` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `pseudo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `role` enum('admin', 'user') DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Sabine', 'Lemoine', 'Seiren', 's.malecot@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$n77TeVPaz3dq09Io7msmhQ$6TeOpAIxevxju094fmPV6qaC6BOrqBhSqhNks/4Ly/I', 'admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `writing`
--

DROP TABLE IF EXISTS `writing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `writing` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `comment` text DEFAULT NULL,
  `article` longtext DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `writing`
--

LOCK TABLES `writing` WRITE;
/*!40000 ALTER TABLE `writing` DISABLE KEYS */;
INSERT INTO `writing` VALUES (1,'Coupe spéciale été', '...', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit diam in tempus semper. Nullam at rutrum tortor. Fusce tempor suscipit accumsan.','article1.jpg', 1);
/*!40000 ALTER TABLE `writing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` text DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `rabbit_id` int DEFAULT NULL,
  `writing_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` (`id`, `comment`, `user_id`, `writing_id`) VALUES (1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1, 1);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `breeding`
--

DROP TABLE IF EXISTS `breeding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `breeding` (
  `id` int NOT NULL AUTO_INCREMENT,
  `breeder` text DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `street` varchar(255) NOT NULL,
  `zip_code` int NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `introduction` text DEFAULT NULL,
  `engagement` text DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `breeding`
--

LOCK TABLES `breeding` WRITE;
/*!40000 ALTER TABLE `breeding` DISABLE KEYS */;
INSERT INTO `breeding` VALUES (1,'Petite présentation de l éleveuse, sa passion pour les lapins et précisemment pour les angoras.', 'Des petits coeurs d amour', '2 rue les usages', 28030, 'Beauche', '0669024524', 'présentation de l élevage, ce qu il faut savoir.','Mes engagements bla bla bla', '...', 'petits_coeurs@example.com', 1 );
/*!40000 ALTER TABLE `breeding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--
DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `user_id` int NOT NULL,
  `rabbit_id` int NOT NULL,
  CONSTRAINT `fk_favorite_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_favorite_rabbit` FOREIGN KEY (`rabbit_id`) REFERENCES `rabbit` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--
LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
INSERT INTO
  `favorite`
VALUES
  (1, 1);
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: pokedex
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  `def_normal` int NOT NULL,
  `def_fire` int NOT NULL,
  `def_water` int NOT NULL,
  `def_electric` int NOT NULL,
  `def_grass` int NOT NULL,
  `def_ice` int NOT NULL,
  `def_fighting` int NOT NULL,
  `def_poison` int NOT NULL,
  `def_ground` int NOT NULL,
  `def_flying` int NOT NULL,
  `def_psychic` int NOT NULL,
  `def_bug` int NOT NULL,
  `def_rock` int NOT NULL,
  `def_ghost` int NOT NULL,
  `def_dragon` int NOT NULL,
  `def_dark` int NOT NULL,
  `def_steel` int NOT NULL,
  `def_fairy` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'normal',1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1),(2,'Fire',1,1,1,1,2,2,1,1,1,1,1,2,1,1,1,1,2,1),(3,'Water',1,2,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1),(4,'Electric',1,1,2,1,1,1,1,1,0,2,1,1,1,1,1,1,1,1),(5,'Grass',1,1,2,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1),(6,'Ice',1,1,1,1,2,1,1,1,2,2,1,1,1,1,2,1,1,1),(7,'Fighting',2,1,1,1,1,2,1,1,1,1,1,1,2,0,1,2,2,1),(8,'Poison',1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,0,2),(9,'Ground',1,2,1,2,1,1,1,2,1,0,1,1,2,1,1,1,2,1),(10,'Flying',1,1,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,1),(11,'Psychic',1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,0,1,1),(12,'Bug',1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1),(13,'Rock',1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,1),(14,'Ghost',0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1),(15,'Dragon',1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,0),(16,'Dark',1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1),(17,'Steel',1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,2),(18,'Fairy',1,1,1,1,1,1,2,1,1,1,1,1,1,1,2,2,1,1);
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-02 14:47:38

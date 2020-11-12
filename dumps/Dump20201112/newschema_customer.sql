-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: newschema
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `custid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `Fname` varchar(45) DEFAULT NULL,
  `Lname` varchar(45) DEFAULT NULL,
  `phonenumber` varchar(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`custid`),
  KEY `catFK_idx` (`category`),
  CONSTRAINT `catFK` FOREIGN KEY (`category`) REFERENCES `category` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (100,'ramisgood','ram','Ram','Sundar','9554433221','Chennai','1972-01-01','Bronze','ram@gmail.com','Customer'),(101,'HarrTheGreat','harri','Harry','Potter','8997890987','Mumbai','1999-04-12','Gold','harri@gmail.com','Customer'),(103,'fredlovesall','fred','R','Fred','9534323454','Kolkata','1993-03-08','Silver','fred@gmail.com','Customer'),(104,'SUGANTH','sugan','S','Suganth','8776654324','Chennai','1988-09-09','Bronze','sugan@gmail.com','Customer'),(105,'MS','dhoni','MS','Dhoni','9875544455','Coimbatore','1998-08-12','Platinum','ms@gmail.com','Customer'),(106,'WILLsmith','smith','Will','Smith','8676788888','Bangalore','1977-10-10','Gold','wills@gmail.com','Customer'),(107,'DD','dynoo','D','Dynamo','9876666666','Delhi','1966-12-12','Silver','dynD@gmail.com','Customer'),(108,'JC','chanjackie','Jackie','Chan','9888877777','Hyderabad','1974-03-03','Bronze','jackic@gmail.com','Customer'),(109,'Kenn','kenny','S','Kenny','9876555555','Kolkata','1976-04-07','Bronze','ken@gmail.com','Customer'),(110,'ADDDAAM','adam','A','Adam','9788877776','Mumbai','1988-10-06','Bronze','adddaam@gmail.com','Customer'),(112,'jenny','success1234','Jenny','Luther','9443323454','Bangalore','2000-02-12','Gold','jenny@gmail.com','Customer');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-12 17:24:59

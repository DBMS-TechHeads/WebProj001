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
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner` (
  `ownerid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `Fname` varchar(45) DEFAULT NULL,
  `Lname` varchar(45) DEFAULT NULL,
  `phonenumber` varchar(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `income` int DEFAULT NULL,
  `commission` decimal(3,2) DEFAULT NULL,
  `emailid` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ownerid`)
) ENGINE=InnoDB AUTO_INCREMENT=514 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (500,'myuserSam','sam1234','Sam','Curran','9821123212','Hyderabad','1988-03-12',0,0.40,'sam@gmail.com','Owner'),(501,'oceansSon','percy','Percy','Jackson','9945654567','Delhi','1999-05-14',0,0.40,'percy@gmail.com','Owner'),(502,'CHOwan','cho','C','Cho','9554343213','Chennai','1998-07-09',0,0.40,'chooo@gmail.com','Owner'),(503,'Shushh','success','S','Sussan','8766533411','Kolkata','1977-07-09',0,0.40,'suan@gmail.com','Owner'),(504,'dhawans','rent','C','Dhawan','9854231333','Hyderabad','1988-07-09',0,0.40,'dhaw@gmail.com','Owner'),(505,'luthersacc','paint','Bill','Luther','8765554434','Chennai','1999-10-12',0,0.40,'bill@gmail.com','Owner'),(506,'graceus','love','H','Grace','9755566644','Delhi','1976-05-09',0,0.40,'gh@gmail.com','Owner'),(507,'timtim','amma','T','Tim','9665566543','Hyderabad','1988-12-14',0,0.40,'timtim@gmail.com','Owner'),(508,'xenn','bulltet','X','Xen','9756467656','Chennai','1976-05-04',0,0.40,'xening@gmail.com','Owner'),(509,'murrali','paper','M','Murrali','8777777777','Kolkata','1972-05-02',0,0.40,'murr@gmail.com','Owner'),(510,'SF','hahahaha','S','Freddrick','9787645555','Chennai','1972-02-13',0,0.40,'fredd@gmail.com','Owner'),(511,'suajnsurya','sujan001','Sujan','Surya','8674345678','Chennai','1998-07-09',0,0.40,'sujan@yahoo.co.in','Owner');
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
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

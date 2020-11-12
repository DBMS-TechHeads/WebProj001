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
-- Table structure for table `hiringinfo`
--

DROP TABLE IF EXISTS `hiringinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hiringinfo` (
  `BillNo` int NOT NULL AUTO_INCREMENT,
  `paintingid` int NOT NULL,
  `rentdate` date DEFAULT NULL,
  `returndate` date DEFAULT NULL,
  `custid` int DEFAULT NULL,
  `Returned` varchar(1) DEFAULT NULL,
  `paintingname` varchar(45) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`BillNo`),
  KEY `custFK_idx` (`custid`),
  CONSTRAINT `custFK` FOREIGN KEY (`custid`) REFERENCES `customer` (`custid`)
) ENGINE=InnoDB AUTO_INCREMENT=1045 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hiringinfo`
--

LOCK TABLES `hiringinfo` WRITE;
/*!40000 ALTER TABLE `hiringinfo` DISABLE KEYS */;
INSERT INTO `hiringinfo` VALUES (1039,914,'2020-11-11','2021-01-01',106,'n','Tribes','https://s22658.pcdn.co/wp-content/uploads/2004/03/blessings-from-medicine-man.jpg'),(1040,900,'2020-11-11','2020-12-04',112,'n','The Sun','https://s3.ca-central-1.amazonaws.com/setwallpapers.com.images/preview/642af18ae141849d8cd3faef04d40c5c.jpg'),(1041,901,'2020-11-12','2020-12-25',100,'n','Mountains','https://wallpaperaccess.com/full/1428884.jpg'),(1042,910,'2020-11-12','2021-01-01',100,'n','The Fortress','https://cdn.suwalls.com/wallpapers/fantasy/waterfall-castle-8518-2560x1600.jpg'),(1043,908,'2020-11-12','2021-01-02',100,'y','Pets','https://designpress-10674.kxcdn.com/wp-content/uploads/2010/01/painted-wallpaper-06.jpg'),(1044,906,'2020-11-12','2020-11-20',100,'y','Trees','https://i.pinimg.com/originals/3a/48/5a/3a485afef930eb7be45648638806f70a.jpg');
/*!40000 ALTER TABLE `hiringinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-12 17:25:00

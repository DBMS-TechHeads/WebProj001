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
-- Table structure for table `painting`
--

DROP TABLE IF EXISTS `painting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `painting` (
  `paintingid` int NOT NULL AUTO_INCREMENT,
  `paintingname` varchar(45) DEFAULT NULL,
  `artistname` varchar(45) DEFAULT NULL,
  `theme` varchar(45) DEFAULT NULL,
  `rentalcost` varchar(45) DEFAULT NULL,
  `monthsnothired` int DEFAULT NULL,
  `hired` varchar(1) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `ownerid` int DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`paintingid`),
  KEY `ownerid_idx` (`ownerid`),
  CONSTRAINT `ownerFK` FOREIGN KEY (`ownerid`) REFERENCES `owner` (`ownerid`)
) ENGINE=InnoDB AUTO_INCREMENT=915 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `painting`
--

LOCK TABLES `painting` WRITE;
/*!40000 ALTER TABLE `painting` DISABLE KEYS */;
INSERT INTO `painting` VALUES (900,'The Sun','Luther','Nature','2000',0,'y','https://s3.ca-central-1.amazonaws.com/setwallpapers.com.images/preview/642af18ae141849d8cd3faef04d40c5c.jpg',500,NULL),(901,'Mountains','Ramkrishnan','Landscape','2500',0,'y','https://wallpaperaccess.com/full/1428884.jpg',501,NULL),(902,'Radha Krishna','Gokul','Religious','4000',0,'n','https://i.pinimg.com/736x/da/aa/ca/daaaca38fcfbfa3402719218f1640bbc.jpg',502,NULL),(903,'The Sea','Sam','Seascape','1000',0,'n','https://cdna.artstation.com/p/assets/images/images/013/540/668/large/leon-devenice-voices-of-the-ocean-seascape-oil-painting-on-canvas-by-leon-devenice.jpg?1540075468',503,NULL),(904,'Table of Life','Harry','Still-Life','2000',0,'n','https://images.template.net/wp-content/uploads/2017/02/06233638/Still-Life-Painting-Ideas.jpg',504,NULL),(905,'Apples','Han Choi','Still-Life','5000',0,'n','https://i.pinimg.com/originals/1b/b4/22/1bb4227dd35f0ef0bee08ee5bd7bdc25.jpg',505,NULL),(906,'Trees','Owen','Landscape','2033',0,'n','https://i.pinimg.com/originals/3a/48/5a/3a485afef930eb7be45648638806f70a.jpg',506,NULL),(908,'Pets','Laxam','Animal','5000',0,'n','https://designpress-10674.kxcdn.com/wp-content/uploads/2010/01/painted-wallpaper-06.jpg',508,NULL),(909,'The Lonely House','Bravo','Landscape','3333',0,'n','https://wallup.net/wp-content/uploads/2017/11/10/75752-oil_painting-748x421.jpg',509,NULL),(910,'The Fortress','Zac','Landscape','4555',0,'y','https://cdn.suwalls.com/wallpapers/fantasy/waterfall-castle-8518-2560x1600.jpg',510,NULL),(911,'Trees and Lake','Ralph','Nature','1050',0,'n','https://images2.alphacoders.com/699/thumb-1920-699345.jpg',500,NULL),(912,'The Legend','Jackie Shaue','Nature','3000',0,'n','https://cdn.statically.io/img/wallpaperset.com/w/full/5/c/2/51687.jpg',502,NULL),(913,'The Woods','Adam Luis','Nature','4000',0,'n','https://images7.alphacoders.com/348/348364.jpg',508,NULL),(914,'Tribes','Luther King','Religious','4000',0,'y','https://s22658.pcdn.co/wp-content/uploads/2004/03/blessings-from-medicine-man.jpg',511,NULL);
/*!40000 ALTER TABLE `painting` ENABLE KEYS */;
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

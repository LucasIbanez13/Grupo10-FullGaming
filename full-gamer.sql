-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fullGamer
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fullGamer
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fullGamer` DEFAULT CHARACTER SET utf8 ;
USE `fullGamer` ;

-- -----------------------------------------------------
-- Table `fullGamer`.`stocks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`stocks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `available` TINYINT NOT NULL DEFAULT 0,
  `amount` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`regions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`regions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`locations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `shiement` TINYINT NOT NULL,
  `regionId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_locations_regions_idx` (`regionId` ASC) VISIBLE,
  CONSTRAINT `fk_locations_regions`
    FOREIGN KEY (`regionId`)
    REFERENCES `fullGamer`.`regions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imagePrimary` VARCHAR(45) NOT NULL,
  `imageSecondary` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`categorys`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`categorys` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) NULL,
  `description` TEXT NOT NULL,
  `price` INT NOT NULL,
  `discount` INT NULL,
  `stockId` INT NOT NULL,
  `brandId` INT NOT NULL,
  `locationId` INT NOT NULL,
  `imageId` INT NOT NULL,
  `statusId` INT NOT NULL,
  `categoryId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_stock_idx` (`stockId` ASC) VISIBLE,
  INDEX `fk_products_brands_idx` (`brandId` ASC) VISIBLE,
  INDEX `fk_products_locations_idx` (`locationId` ASC) VISIBLE,
  INDEX `fk_products_image_idx` (`imageId` ASC) VISIBLE,
  INDEX `fk_products_status_idx` (`statusId` ASC) VISIBLE,
  INDEX `fk_products_categorys_idx` (`categoryId` ASC) VISIBLE,
  CONSTRAINT `fk_products_stocks`
    FOREIGN KEY (`stockId`)
    REFERENCES `fullGamer`.`stocks` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_brands`
    FOREIGN KEY (`brandId`)
    REFERENCES `fullGamer`.`brands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_locations`
    FOREIGN KEY (`locationId`)
    REFERENCES `fullGamer`.`locations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_image`
    FOREIGN KEY (`imageId`)
    REFERENCES `fullGamer`.`images` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_status`
    FOREIGN KEY (`statusId`)
    REFERENCES `fullGamer`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_categorys`
    FOREIGN KEY (`categoryId`)
    REFERENCES `fullGamer`.`categorys` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`profile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `surname` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  `phone` VARCHAR(255) NULL,
  `dni` VARCHAR(255) NULL,
  `lookfor` VARCHAR(255) NULL,
  `street` VARCHAR(255) NULL,
  `height` VARCHAR(255) NULL,
  `departament` VARCHAR(255) NULL,
  `profilecol` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `pass` VARCHAR(255) NOT NULL,
  `rol` TINYINT NOT NULL DEFAULT 0,
  `profileId` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_profile_idx` (`profileId` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile`
    FOREIGN KEY (`profileId`)
    REFERENCES `fullGamer`.`profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NULL,
  `total` DOUBLE NULL,
  `state` VARCHAR(45) NULL,
  `nameUserId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orders_user_idx` (`nameUserId` ASC) VISIBLE,
  CONSTRAINT `fk_orders_user`
    FOREIGN KEY (`nameUserId`)
    REFERENCES `fullGamer`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `fullGamer`.`OrderDetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fullGamer`.`OrderDetails` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amount` VARCHAR(45) NULL,
  `productId` INT NULL,
  `orderId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_order_product_idx` (`productId` ASC) VISIBLE,
  INDEX `fk_order_order_idx` (`orderId` ASC) VISIBLE,
  CONSTRAINT `fk_order_product`
    FOREIGN KEY (`productId`)
    REFERENCES `fullGamer`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_order`
    FOREIGN KEY (`orderId`)
    REFERENCES `fullGamer`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

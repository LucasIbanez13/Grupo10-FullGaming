-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema full-gamer
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema full-gamer
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `full-gamer` DEFAULT CHARACTER SET utf8 ;
USE `full-gamer` ;

-- -----------------------------------------------------
-- Table `full-gamer`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`brands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imagePrimaty` VARCHAR(45) NULL,
  `imageSecondary` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `model` VARCHAR(255) NULL,
  `description` TEXT NULL,
  `price` INT NULL,
  `amount` INT NULL,
  `discount` INT NULL,
  `brandId` INT NULL,
  `imageId` INT NULL,
  `statusId` INT NULL,
  `categoryId` INT NULL,
  `mypcId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_category_idx` (`categoryId` ASC) VISIBLE,
  INDEX `fk_products_brands_idx` (`brandId` ASC) VISIBLE,
  INDEX `fk_products_image_idx` (`imageId` ASC) VISIBLE,
  INDEX `fk_products_status_idx` (`statusId` ASC) VISIBLE,
  CONSTRAINT `fk_products_category`
    FOREIGN KEY (`categoryId`)
    REFERENCES `full-gamer`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_brands`
    FOREIGN KEY (`brandId`)
    REFERENCES `full-gamer`.`brands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_image`
    FOREIGN KEY (`imageId`)
    REFERENCES `full-gamer`.`image` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_status`
    FOREIGN KEY (`statusId`)
    REFERENCES `full-gamer`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`stocks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`stocks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `avaliable` VARCHAR(255) NULL,
  `amount` INT NULL,
  `productId` INT NULL, 
  PRIMARY KEY (`id`),
  INDEX `fk_stock_product_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `fk_stock_product`
    FOREIGN KEY (`productId`)
    REFERENCES `full-gamer`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `pass` VARCHAR(255) NULL,
  `rol` TINYINT NULL,
  `surname` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  `phone` VARCHAR(255) NULL,
  `dni` VARCHAR(45) NULL,
  `floor` VARCHAR(255) NULL,
  `street` VARCHAR(255) NULL,
  `height` VARCHAR(255) NULL,
  `departament` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `date` DATE NULL,
  `userId` INT NULL,
  `productId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carts_users_idx` (`userId` ASC) VISIBLE,
  INDEX `fk_carst_products_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `fk_carts_users`
    FOREIGN KEY (`userId`)
    REFERENCES `full-gamer`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carst_products`
    FOREIGN KEY (`productId`)
    REFERENCES `full-gamer`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `full-gamer`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-gamer`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NULL,
  `total` INT NULL,
  `statusId` INT NULL,
  `userId` INT NULL,
  `cartsId` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orders_status_idx` (`statusId` ASC) VISIBLE,
  INDEX `fk_orders_users_idx` (`userId` ASC) VISIBLE,
  INDEX `fk_orders_carts_idx` (`cartsId` ASC) VISIBLE,
  CONSTRAINT `fk_orders_status`
    FOREIGN KEY (`statusId`)
    REFERENCES `full-gamer`.`status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`userId`)
    REFERENCES `full-gamer`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_carts`
    FOREIGN KEY (`cartsId`)
    REFERENCES `full-gamer`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

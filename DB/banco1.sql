-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mapeamento
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mapeamento
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mapeamento` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mapeamento` ;

-- -----------------------------------------------------
-- Table `mapeamento`.`mapa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mapeamento`.`mapa` (
  `idmapa` INT(11) NOT NULL AUTO_INCREMENT,
  `RELACAO_AGRESSOR` VARCHAR(45) NOT NULL,
  `DATA` DATETIME NOT NULL,
  `LOCAL` VARCHAR(45) NOT NULL,
  `DESCRICAO_LOCAL` VARCHAR(45) NULL DEFAULT NULL,
  `IDADE_DATA_FATO` INT(11) NOT NULL,
  `IDADE_ATUAL` INT(11) NOT NULL,
  `TIPO_VIOLENCIA` VARCHAR(45) NOT NULL,
  `RELIGIAO` VARCHAR(45) NOT NULL,
  `IDENTIDADE_GENERO` VARCHAR(45) NOT NULL,
  `ORIENTACAO_SEXUAL` VARCHAR(45) NOT NULL,
  `SEXO` VARCHAR(45) NOT NULL,
  `ESCOLARIDADE` VARCHAR(45) NOT NULL,
  `PROFISSAO` VARCHAR(45) NOT NULL,
  `NACIONALIDADE` VARCHAR(45) NOT NULL,
  `ETNIA` VARCHAR(45) NOT NULL,
  `DEFICIENCIA` VARCHAR(45) NOT NULL,
  `VIOLENCIA_INSTITUCIONAL` VARCHAR(45) NULL DEFAULT NULL,
  `FEZ_DENUNCIA` VARCHAR(45) NOT NULL,
  `MOTIVO_NAO_DENUNCIA` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idmapa`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mapeamento`.`autor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mapeamento`.`autor` (
  `idautor` INT(11) NOT NULL AUTO_INCREMENT,
  `RELACAO_COM_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `RELIGIAO_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `IDENTIDADE_GENERO_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `ORIENTACAO_SEXUAL_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `SEXO_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `ESCOLARIDADE_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `PROFISSAO_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `NACIONALIDADE_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `ETNIA_AUTOR` VARCHAR(45) NULL DEFAULT NULL,
  `IDADE_AUTOR` INT(11) NULL DEFAULT NULL,
  `mapa_idmapa` INT(11) NOT NULL,
  PRIMARY KEY (`idautor`),
  INDEX `fk_autor_mapa_idx` (`mapa_idmapa` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `mapeamento`.`localizar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mapeamento`.`localizar` (
  `idlocalizar` INT(11) NOT NULL AUTO_INCREMENT,
  `LATITUDE` DECIMAL(10,8) NOT NULL,
  `LONGITUDE` DECIMAL(10,8) NOT NULL,
  `mapa_idmapa` INT(11) NOT NULL,
  PRIMARY KEY (`idlocalizar`),
  UNIQUE INDEX `idlocalizar_UNIQUE` (`idlocalizar` ASC) VISIBLE,
  INDEX `fk_localizar_mapa1_idx` (`mapa_idmapa` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Script de creación de la base de datos y tablas

-- 1. Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS gestion_usuarios;

-- 2. Seleccionar la base de datos para trabajar en ella
USE gestion_usuarios;

-- 3. Crear la tabla de usuarios con la estructura solicitada
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,       -- Clave primaria
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Nota: El ID se maneja como VARCHAR para soportar UUIDs o strings de tiempo.
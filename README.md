## TRELLO
Más info en [mi tablero de trello](https://trello.com/b/4lC3J8oT/java-proyecto-senati)
![TRELLO](https://github.com/ojitoslanda/testing/blob/master/img/javaweb/Trello.png)

---
# Sistema de Venta de comida "KLETA"
Sistema web para la gestión de venta de comida con facilidades de pago diario, semanal y mensual. Desarrollado como proyecto final del curso de Java Web en SENATI.

## Descripcion del negocio
Nombre: Restaurane Jugeria "KLETA" <br>
Giro: Financiera formal registrado por SUNAT <br>
Tamaño: Pequeña empresa, operacion individual o familiar <br>
Contexto: Negocio muy comun en el Peru donde una pequeña familia ofrece servicio de comida a  pequeños a personas e instituciones con registro de boletas y factura, cobrando diariamente, semanalmente o mensualmente con servicio a domicilio o pedidos con reserva y recogo. <br>
Justificacion: Se necesita un sistema digital para reemplazar el cuaderno manual del cobrador, evitar errores y tener un control claro de cada consumo y pedido de los alimento.

## Identificar el problema y solución
Problema: La persona encargada de llevar el registro de venta y pensionistas en un cuaderno o en papel, lo que genera errores, perdida de informacion, dificultad para saber cuanto debe cada cliente y cuantos pensionistas llegaron a comer ese dia. <br>
Solucion tecnologica: Desarrollar un sistema web con Java Spring Boot y MySQL que permita registrar clientes, "falta completar esta informacion" //prestamos y cobros diarios, mostrando en todo momento el estado de cada prestamo y el historial de pagos.//

 
## Requerimientos Funcionales
| Codigo | Descripcion |
|---|---|
| RF01 | El sistema debe permitir registrar un nuevo cliente con nombre, apellido, DNI y telefono. |
| RF02 | El sistema debe permitir registrar un nuevo cliente indicando su nombre completo, DNI, telefono. |
| RF03 | El sistema debe permitir registrar el cobro diario de los consumos diarios |
| RF04 | El sistema debe mostrar el listado de todos los productos que se vende al momento. |
| RF05 | El sistema debe mostrar el historial de consumos diarios. |
 
## Requerimientos No Funcionales
 
| Codigo | Tipo | Descripcion |
|---|---|---|
| RNF01 | Rendimiento | El sistema debe cargar cada pantalla en menos de 3 segundos |
| RNF02 | Usabilidad | La interfaz debe ser intuitiva y facil de usar sin necesidad de capacitacion previa |
| RNF03 | Seguridad | Solo usuarios autorizados podran acceder al sistema mediante usuario y contraseña |

## Stack completo
1. Trello             = Gestión del proyecto (Kanban)
2. Draw.io            = Diagrama ER + Diagrama de Clases
3. Figma              = Wireframe + Diseño UI/UX
4. MySQL Workbench    = Diseñar y administrar BD
5. IntelliJ           = Frontend (HTML,CSS,JS) + Backend (Spring Boot)
6. XAMPP              = Servidor Tomcat para correr la app

## Tecnologias utilizadas
- Java 17
- Spring Boot 3
- MySQL 8
- HTML5, CSS3, JavaScript
- IntelliJ IDEA
- XAMPP (Tomcat)
- MySQL Workbench
- Figma (diseño UI/UX)
- Draw.io (diagramas)
---
 
## Estructura del proyecto
 
```
JavaWeb-Restaurante Jugeria "KLETA"/
├── backend/          → Spring Boot (Java)
│   ├── src/
│   ├── pom.xml
│   └── ...
├── frontend/         → HTML, CSS, JS
│   ├── css/
│   ├── js/
│   └── index.html
```
 
---

### DIAGRAMA DE FIGMA UI/UX
![FIGMA](https://www.figma.com/design/8hbmitxV0MmRMeIOPdFwlD/Proyecto_Senati?node-id=1-2&p=f&t=4svsOGBd4fTzjtsD-0)

## Base de datos
 
El sistema cuenta con 4 tablas principales:
 
| Tabla | Descripcion |
|---|---|
| DUEÑO | Persona encargadas de gestionar y cantabilizar los consumos diarios, semanales y mesuales |
| CLIENTE | Personas que consumen los aliemtos realizado por el restaurante |
| CAJERO | Registra de cada pago de los clientes y guarda en la caja |

### Diagrama Entidad-Relacion (DER)
![Diagrama Entidad Relacion](https://github.com/MaraRuiz11/KLETA_IN_PROCESO/blob/main/imagen_png/Diagrama_Entidad_Relaci%C3%B3n.png)
 
### Modelo Relacional (MR)
![Modelo Relacional](https://github.com/MaraRuiz11/KLETA_IN_PROCESO/blob/main/imagen_png/Modelo_Relacional.png)

### Cardinalidades
VENTA — CLIENTE (1:N) <br>
Un cliente puede realizar muchos ventas. <br>
DETALLE_VENTA — VENTA (1:N) <br>
Una venta contiene uno a muchas ventas. <br>
DETALLE_VENTA — PRODUCTO (1:N) <br>
Un producto puede aparecer en muchos detalles de venta.

| Entidad A | Relacion | Entidad B | Cardinalidad |
|---|---|---|---|
| VENTA | contiene | CLIENTE | 1:N |
| DETALLE_VENTA | contiene | VENTE | 1:N |
| DETALLE_VENTA | aparece | PRODUCTO | 1:N |


### Base de datos
 
El sistema cuenta con 4 tablas principales:

```sql
CREATE DATABASE restaurante_kleta;

USE restaurante_kleta;

CREATE TABLE Cliente (
ID_Cliente INT PRIMARY KEY AUTO_INCREMENT,
Nombre VARCHAR(100),
DNI VARCHAR(8),
Telefono VARCHAR(15)
);

CREATE TABLE Producto (
ID_Producto INT PRIMARY KEY AUTO_INCREMENT,
Nombre_Producto VARCHAR(100),
Tipo_Producto VARCHAR(50),
Precio DECIMAL(10,2),
Stock INT
);

CREATE TABLE Venta (
ID_Venta INT PRIMARY KEY AUTO_INCREMENT,
Fecha DATE,
Total DECIMAL(10,2),
ID_Cliente INT,
FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente)
);

CREATE TABLE Detalle_Venta (
ID_Detalle INT PRIMARY KEY AUTO_INCREMENT,
ID_Venta INT,
ID_Producto INT,
Cantidad INT,
Subtotal DECIMAL(10,2),
FOREIGN KEY (ID_Venta) REFERENCES Venta(ID_Venta),
FOREIGN KEY (ID_Producto) REFERENCES Producto(ID_Producto)
);

-- INSERCION DE CLIENTES
INSERT INTO Cliente (Nombre, DNI, Telefono) VALUES
    ('Carlos Perez', '12345678', '987654321'),
  	('Maria Lopez', '87654321', '912345678'),
 	('Juan Torres', '11223344', '999888777');
-- INSERCION DE PRODUCTOS
INSERT INTO Producto (Nombre_Producto, Tipo_Producto, Precio, Stock) VALUES
  	('Jugo de Maracuya', 'Bebida', 3.50, 50),
  	('Sandwich de Pollo', 'Comida', 5.00, 30),
  	('Tamal Verde', 'Comida', 4.00, 20),
  	('Juane de Arroz', 'Comida', 8.00, 15),
  	('Menu del Dia', 'Menu', 12.00, 40);
-- INSERCION DE VENTAS
INSERT INTO Venta (Fecha, Total, ID_Cliente) VALUES
 	('2026-03-10', 17.00, 1),
  	('2026-03-10', 12.00, 2),
  	('2026-03-11', 20.50, 3);
-- INSERCION DE DETALLE DE VENTAS
INSERT INTO Detalle_Venta (ID_Venta, ID_Producto, Cantidad, Subtotal) VALUES
 	(1, 2, 2, 10.00),
 	(1, 1, 2, 7.00),
    (2, 5, 1, 12.00),
  	(3, 4, 1, 8.00),
  	(3, 3, 3, 12.50);
-- CONSULTA 1: Ventas con nombre del cliente (JOIN + ORDER BY)
SELECT V.ID_Venta, C.Nombre, V.Fecha, V.Total
FROM Venta V
INNER JOIN Cliente C ON V.ID_Cliente = C.ID_Cliente
ORDER BY V.Fecha;
-- CONSULTA 2: Detalle de productos por venta (JOIN + WHERE)
SELECT D.ID_Venta, P.Nombre_Producto, D.Cantidad, D.Subtotal
FROM Detalle_Venta D
INNER JOIN Producto P ON D.ID_Producto = P.ID_Producto
WHERE D.ID_Venta = 1;
-- CONSULTA 3: Productos mas vendidos (JOIN + GROUP BY + ORDER BY)
SELECT P.Nombre_Producto, SUM(D.Cantidad) AS Total_Vendido
FROM Detalle_Venta D
INNER JOIN Producto P ON D.ID_Producto = P.ID_Producto
GROUP BY P.Nombre_Producto
ORDER BY Total_Vendido DESC;
-- CONSULTA 4: Ventas con total mayor a S/15.00 (WHERE + ORDER BY)
SELECT V.ID_Venta, C.Nombre, V.Fecha, V.Total
FROM Venta V
INNER JOIN Cliente C ON V.ID_Cliente = C.ID_Cliente
WHERE V.Total > 15.00


```

---
 
## Como correr el proyecto
 
### Requisitos previos
- Tener instalado IntelliJ IDEA
- Tener instalado XAMPP (para MySQL)
- Tener instalado MySQL Workbench
- Tener instalado JDK 21 o superior
 
### Backend
1. Abrir la carpeta `backend/` en IntelliJ IDEA
2. Configurar `application.properties` con los datos de MySQL
3. Iniciar XAMPP y activar MySQL
4. Ejecutar `GotagotaApplication.java`
5. El backend corre en: `http://localhost:8080`
 
### Frontend
1. Abrir la carpeta `frontend/` en VsCode
2. Abrir `index.html` con Live Server
3. El frontend se comunica con el backend via fetch()
 
> El frontend y el backend corren por separado.
> El backend debe estar iniciado antes de abrir el frontend.
 
### Configuracion de base de datos
```
spring.application.name=gotagota
# CONEXION A MYSQL
spring.datasource.url=jdbc:mysql://localhost:3306/gota_a_gota
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

#JPA / HIBERNATE
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Puerto del servidor
server.port=8080

```
 

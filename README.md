# Práctica 7 - Modelo de datos de un sistema de información que permite gestionar una tienda de muebles

---

**Integrantes del grupo:** Alba Pérez Rodríguez

**Integrantes del grupo:** Tomás Javes Tommasone

**Integrantes del grupo:** Guillermo Plaza Gayan


**Fecha:** 12/03/2024

**Estudios:** Ingeniería Informática

**Asignatura:** Desarrollo en Sistemas Informáticos

**Profesor:** Eduardo Manuel Segredo González

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/coveralls.yml)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupt/actions/workflows/node.js.yml)


---

# Índice

1. [Introducción](#1-introducción)
2. [Objetivos](#2-objetivos)
3. [Antes de empezar](#3-antes-de-empezar)
4. [Configuración de Istambul y coveralls](#4-configuracion-de-istambul-y-coveralls)
5. [Principios SOLID](#5-principios-solid)
6. [GitHub Actions](#github-actions)
7. [SonarCloud](#sonarcloud)

---


Introducción:
El presente informe detalla el proceso de desarrollo de una aplicación de gestión de muebles, diseñada como parte de un proyecto universitario. Esta aplicación tiene como objetivo facilitar la gestión integral de clientes, proveedores, muebles y el stock de una empresa del sector mobiliario. Se ha implementado utilizando TypeScript y se han empleado las bibliotecas inquirer y lowdb para la interfaz de línea de comandos y la gestión de la base de datos, respectivamente.

1. Diseño de la Base de Datos:
Se ha diseñado una estructura de base de datos flexible y escalable para almacenar la información relevante del negocio. La base de datos se ha implementado utilizando lowdb, una base de datos basada en archivos JSON que facilita el almacenamiento y manipulación de datos. Se han definido las siguientes entidades principales:

Clientes: Contiene información sobre los clientes, incluyendo su nombre, contacto y dirección.

``` ts
export interface Customer {
  id: number;
  name: string;
  contact: string;
  address: string;
}
```

Proveedores: Almacena los detalles de los proveedores, como su nombre, contacto y dirección.

``` ts
export interface Provider {
  id: number;
  name: string;
  contact: string;
  address: string;
}
```

Muebles: Registra información detallada sobre los muebles disponibles, como nombre, descripción, material, dimensiones, precio y cantidad en stock.

``` ts
export interface Furniture {
  id: number;
  name: string;
  description: string;
  material: string;
  dimensions: string;
  price: number;
}
```

Stock: Gestiona el inventario de muebles, incluyendo transacciones de compra y venta, así como el seguimiento de la cantidad disponible de cada artículo.



2. Implementación de la Interfaz de Usuario:
La interfaz de usuario se ha desarrollado utilizando la biblioteca inquirer, que permite una interacción amigable a través de la línea de comandos. Se han diseñado distintas opciones de menú para realizar operaciones de gestión y consulta en la base de datos. Cada opción del menú desencadena una serie de acciones específicas, como agregar, eliminar, buscar o consultar información detallada.

3. Gestión de Clientes:
Para la gestión de clientes, se han implementado funciones que permiten agregar, eliminar y buscar clientes en la base de datos. Los usuarios pueden ingresar los detalles del cliente, como nombre, contacto y dirección, y realizar acciones según las necesidades del negocio.

4. Gestión de Muebles:
La gestión de muebles sigue un proceso similar, con funciones para agregar, eliminar y buscar muebles en la base de datos. Además, se ha incluido una función para consultar información detallada sobre un mueble específico, proporcionando detalles como descripción, material, precio y cantidad en stock.

5. Gestión de Proveedores:
Se han desarrollado funciones para agregar, eliminar y buscar proveedores en la base de datos. Los usuarios pueden ingresar detalles como nombre, contacto y dirección del proveedor, lo que facilita el seguimiento y la gestión de la cadena de suministro.

6. Consulta de Stock:
La aplicación ofrece opciones para consultar el stock de muebles, lo que permite a los usuarios verificar la cantidad disponible de cada artículo en el inventario. Además, se han incluido funciones para consultar transacciones pasadas y generar informes sobre ventas y compras, ofreciendo una visión detallada del rendimiento del negocio.

Conclusiones:
La aplicación de gestión de muebles desarrollada constituye una solución integral y eficiente para administrar clientes, proveedores, muebles y stock en el sector mobiliario. Este proyecto ha permitido aplicar conceptos teóricos en un contexto práctico, fortaleciendo las habilidades de desarrollo de software y gestión de bases de datos. La implementación exitosa de esta aplicación demuestra la capacidad para diseñar y desarrollar soluciones tecnológicas adaptadas a las necesidades específicas de las empresas del sector.
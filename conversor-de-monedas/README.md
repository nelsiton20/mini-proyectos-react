# Conversor de Monedas

Este proyecto es una aplicación web sencilla que permite convertir monedas utilizando tasas de cambio en tiempo real. Está diseñado para practicar conceptos de React, como el manejo de estado, consumo de APIs y uso de variables de entorno.

## Requerimientos del Proyecto

1. **Funcionalidades principales:**
   - Seleccionar la moneda de origen y la moneda de destino.
   - Ingresar un monto para convertir.
   - Mostrar el resultado de la conversión.
   - Guardar y mostrar un historial de conversiones.

2. **Tecnologías utilizadas:**
   - React (con Vite).
   - API para tasas de cambio en tiempo real.
   - LocalStorage para persistencia del historial.

3. **Diseño:**
   - Una interfaz moderna y fácil de usar, con diseño responsivo.

## Configuración del proyecto

### 1. Requisitos previos
- Node.js instalado en tu máquina.
- Una cuenta en [Exchangerate API](https://exchangerate.host/) (u otra API similar) para obtener una API key.

### 2. Obtener la API key
1. Regístrate o inicia sesión en la página de la API.
2. Ve a tu perfil y copia la **API key** proporcionada.

### 2. Instalación y configuración

1. Clona este repositorio:
   ```bash
   git clone https://github.com/NelsonDev/mini-proyectos-react.git
   cd mini-proyectos-react/conversor-monedas

2. Instala las dependencias
    npm install

3. Crear un archivo .env
    - Dentro del directorio del proyecto, crear un archivo llamado **.env**
    - Agrega la siguiente línea, reemplazando **YOUR_API_KEY** con la API key que obtuviste:
        VITE_API_KEY=YOUR_API_KEY

4. Inicia el proyecto en modo de desarrollo:
    npm run dev
# Image Gallery

## Descripción

Esta aplicación permite a los usuarios explorar, buscar y descargar imágenes de alta calidad directamente desde Unsplash. Con una interfaz intuitiva y responsive, los usuarios pueden buscar imágenes en tiempo real, navegar a través de miles de fotos utilizando la paginación, y descargar sus favoritas con un solo clic. La aplicación también cuenta con funcionalidades interactivas, como mostrar el nombre y autor de la imagen al pasar el cursor sobre ella.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Configuración del Unsplash API Key](#configuración-del-unsplash-api-key)
- [Uso](#uso)
- [Características](#características)

## Instalación

Instrucciones paso a paso sobre cómo instalar y configurar el proyecto localmente.

```bash
# Clonar el repositorio
git clone https://github.com/JoseAlata/image-gallery-react-ts

# Navegar al directorio del proyecto
cd image-gallery-react-ts

# Instalar dependencias
npm install
```

## Tecnologías Utilizadas

En este proyecto se han utilizado las siguientes tecnologías:

- **React**
- **TypeScript**
- **Vite**
- **Unsplash API**
- **CSS**

## Configuración del Unsplash API Key

Para poder utilizar la API de Unsplash, necesitas obtener un `client_id`. Sigue estos pasos para obtenerlo y configurarlo en tu proyecto:

1. **Crear una cuenta en Unsplash:**

   - Si no tienes una cuenta, regístrate en [Unsplash](https://unsplash.com/join).

2. **Registrar una nueva aplicación:**

   - Una vez hayas iniciado sesión, ve a la sección [Unsplash Developers](https://unsplash.com/developers).
   - Haz clic en "Your Apps" y luego en "New Application".
   - Completa los detalles necesarios para tu aplicación y envía el formulario.
   - Después de crear la aplicación, obtendrás un `Access Key` y un `Secret Key`.

3. **Configurar el `client_id` en tu proyecto:**
   - Crea un archivo `.env` apartir de `.env.template` en la raíz.
   - reemplaza `YourAPIKeyHere` con tu `Access Key` de Unsplash.

```env
VITE_API_ID=YourAPIKeyHere
```

## Uso

Para usar el proyecto basta con colocar el siguiente comando

```bash
npm run dev
```

## Características

- **Visualización de Imágenes**:

  - La aplicación permite ver imágenes de alta calidad directamente desde Unsplash.
  - Las imágenes se muestran en una galería atractiva y responsive.

- **Descarga de Imágenes**:

  - Puedes descargar las imágenes que te gusten con un solo clic.
  - Las imágenes se descargan en su máxima resolución disponible.

- **Búsqueda de Imágenes**:

  - La aplicación cuenta con una funcionalidad de búsqueda para encontrar imágenes basadas en tus intereses.
  - Los resultados de búsqueda se actualizan en tiempo real mientras escribes.

- **Paginación**:
  - Navega fácilmente a través de miles de imágenes utilizando un sistema de paginación intuitivo.

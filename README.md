# Plantilla web corporativa — React + Vite

Una plantilla de sitio corporativo responsive para crear una **copia independiente** y personalizarla para tu empresa. Usa React, Vite y CSS; no requiere base de datos para la versión inicial.

## Crear tu copia independiente

### Opción A: GitHub Importer (recomendado si no aparece “Use this template”)
1. Inicia sesión en tu cuenta de GitHub.
2. Abre https://github.com/new/import.
3. En **URL del repositorio de origen**, pega `https://github.com/deswebcol/web`.
4. Escribe el nombre de tu nuevo repositorio, por ejemplo `mi-web`, y selecciona si será público o privado.
5. Inicia la importación. GitHub creará un repositorio independiente bajo tu cuenta.
6. Entra en el nuevo repositorio y confirma que los archivos están en la raíz.

> No hagas cambios directamente en `deswebcol/web`. Trabaja en la copia de tu propia cuenta.

### Opción B: desde una plantilla de GitHub
Si el propietario habilita **Settings → Template repository** en el repositorio original, podrás pulsar **Use this template → Create a new repository**. Esta opción también crea un repositorio independiente.

## Personalizar los datos comerciales

Edita `src/config.js`. Es el lugar central para cambiar:

- `brandName`: nombre visible de la marca.
- `email`: correo de contacto.
- `whatsappNumber`: número internacional con código de país, solo dígitos. Colombia: `57` + número.
- `countryLine`: texto del pie de contacto.
- `siteUrl`: URL pública del sitio.

Después revisa `src/App.jsx` para personalizar textos, servicios, productos, estados de disponibilidad y enlaces. El diseño y los estilos están en `src/styles.css`.

Antes de publicar, busca y reemplaza cualquier referencia a “Desweb”, “desweb.cloud”, productos, correo o teléfonos que no correspondan a tu negocio.

## Desarrollo local

Requisitos: Node.js 20 o 22 y npm.

```bash
npm install
npm run dev
```

## Compilar y verificar

```bash
npm run build
npm run preview
```

La compilación crea los archivos estáticos en `dist/`.

## Desplegar en Hostinger Business (sin VPS/EasyPanel)

1. En hPanel, abre la sección de sitios web y el flujo de creación/importación de una aplicación compatible con Node.js/Git.
2. Conecta **tu propia cuenta de GitHub** y elige el repositorio que acabas de importar.
3. Selecciona la rama `main`, el directorio raíz `./` y Node.js 22.x (o una versión compatible que ofrezca tu plan).
4. Configura los comandos:
   - Instalación: `npm install`
   - Compilación: `npm run build`
   - Directorio de salida: `dist`
5. Inicia el despliegue y revisa el registro de compilación.
6. Conecta tu dominio desde hPanel después de verificar que el sitio funciona.

Los nombres exactos de las opciones pueden variar según el producto y la región de Hostinger. Si el plan solo ofrece hosting web estático para este sitio, publica el contenido generado por `npm run build` desde `dist/` en lugar de configurar una aplicación Node.js persistente: Vite genera archivos estáticos y no necesita un servidor Node.js en tiempo de ejecución.

## Base de datos y variables de entorno

Esta plantilla **no utiliza Supabase ni requiere base de datos** en su versión actual. El sitio muestra contenido y enlaces de contacto.

Si incorporas autenticación, formularios conectados a un backend o datos dinámicos, define la arquitectura y configura las variables necesarias por separado. Nunca publiques claves privadas, contraseñas, tokens ni secretos en GitHub. Las variables con prefijo `VITE_` se incluyen en el bundle del navegador y **no deben contener secretos**.

## Lista antes de publicar

- [ ] Marca, correo, WhatsApp y dominio actualizados.
- [ ] Productos, textos, enlaces y disponibilidad revisados.
- [ ] Política de privacidad y cookies ajustadas a tu negocio.
- [ ] `npm run build` finaliza sin errores.
- [ ] Dominio conectado y HTTPS activo.
- [ ] Revisado en móvil y escritorio.

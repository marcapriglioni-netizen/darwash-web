# MANUAL COMPLETO DE ADMINISTRACIÓN
# Sitio web darwash.com.ar
**Preparado por Koru Agency**
**Para uso de Darwash S.A. — Sin conocimientos técnicos necesarios**

---

# ANTES DE EMPEZAR — Entendé cómo funciona todo

## ¿Qué es esta web y cómo está armada?

El sitio darwash.com.ar funciona con **tres piezas separadas** que trabajan juntas:

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   CONTENTFUL    │────▶│   CÓDIGO (ZIP)   │────▶│    VERCEL       │
│  (el contenido) │     │  (el diseño y    │     │  (el hosting,   │
│  remates,       │     │   estructura)    │     │  donde vive     │
│  contactos,     │     │                  │     │  online)        │
│  fotos, textos  │     │                  │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘
   Entrás acá                                      Se actualiza
   para el día a día                               solo
```

**Lo que vas a usar casi siempre: CONTENTFUL.**
Es como el "panel de control" de la web. Desde ahí cargás remates y editás contactos sin tocar una sola línea de código.

**Lo que requiere editar el código:** cambiar textos fijos de la web (como la sección Nosotros, el footer, los colores) o cambiar imágenes de fondo. Eso lo explicamos en la PARTE 3 de este manual.

---

# PARTE 1 — CONTENTFUL: El panel de control del día a día

## ¿Qué es Contentful?

Contentful es una plataforma externa (no es parte del código) donde se guarda todo el contenido que aparece en la web: los remates, las fotos, los datos de los contactos. Cada vez que alguien visita darwash.com.ar, la web va a buscar ese contenido a Contentful y lo muestra.

## 1.1 — Cómo ingresar a Contentful

**Paso 1:** Abrí tu navegador (Chrome, Firefox, Edge, cualquiera)

**Paso 2:** Escribí en la barra de direcciones:
```
be.contentful.com/login
```

**Paso 3:** Ingresá con estas credenciales:
- **Email:** marcapriglioni@gmail.com
- **Contraseña:** Patanete515

**Paso 4:** Hacé clic en **"Log in"**

**Paso 5:** Una vez adentro, vas a ver una barra oscura arriba con varias opciones. Fijate que diga **"Darwash"** a la izquierda (es el nombre del espacio/proyecto). Si no lo ves, puede que hayas ingresado a otro proyecto — buscá en el menú de arriba a la izquierda el nombre Darwash y hacé clic ahí.

**Paso 6:** En la barra oscura de arriba, hacé clic en **"Content"**. Eso te lleva al listado de todo el contenido cargado.

> ⚠️ **Importante:** Siempre tenés que estar parado en la pestaña "Content" para ver y editar el contenido. Si estás en otra sección, el panel se ve diferente.

---

## 1.2 — Entender el panel de Content

Cuando entrás a Content, ves una lista con todas las entradas cargadas (remates viejos, contactos, etc.).

**En la columna izquierda** vas a ver filtros:
- **All content** → muestra todo junto
- **Remates** → muestra solo los remates
- **Contactos** → muestra solo los contactos

Usá esos filtros para no confundirte.

**Las columnas que ves en la lista son:**
- **Name:** el título del remate o contacto
- **Content Type:** dice si es "Remates" o "Contactos"
- **Updated:** cuándo fue la última vez que se editó
- **Status:** muy importante — dice si está **Published** (publicado, visible en la web) o **Draft** (borrador, NO visible)

---

## 1.3 — REMATES: Cargar un remate nuevo

Hay dos formas de hacerlo. **Recomendamos la segunda** porque es más rápida y reduce errores.

### Forma 1: Crear desde cero

**Paso 1:** Estando en Content, hacé clic en el botón **"Add entry"** (arriba a la derecha, botón azul con una flecha hacia abajo).

**Paso 2:** Aparece un menú desplegable. Hacé clic en **"Remates"**.

**Paso 3:** Se abre el formulario en blanco. Completá todos los campos (ver sección 1.4).

### Forma 2: Duplicar un remate anterior (RECOMENDADA)

**Paso 1:** En el panel de Content, filtrá por **Remates** (columna izquierda).

**Paso 2:** Buscá cualquier remate anterior que ya esté cargado.

**Paso 3:** A la derecha de ese remate, vas a ver **tres puntitos (...)**.  Hacé clic ahí.

**Paso 4:** En el menú que aparece, hacé clic en **"Duplicate"**.

**Paso 5:** Se crea una copia exacta del remate con todos los campos ya completos. Solo tenés que entrar y cambiar los datos del nuevo remate.

**Paso 6:** Hacé clic en la entrada duplicada para abrirla y editá cada campo (ver sección 1.4).

---

## 1.4 — REMATES: Descripción de cada campo

Una vez dentro del formulario del remate, vas a ver estos campos:

### TÍTULO (obligatorio)
- **Qué es:** El nombre del remate tal como va a aparecer en la web.
- **Ejemplo:** `Gordos, Invernada y Cría — Viernes 11 Octubre`
- **Cómo completarlo:** Hacé clic en el campo y escribí el nombre.

### SLUG (NO LO TOQUES)
- **Qué es:** Es la parte de la URL del remate (lo que aparece en la barra del navegador después de darwash.com.ar/remates/...).
- **Regla:** **Nunca lo modifiques.** Si duplicaste un remate, el slug se copia automáticamente con un número al final. Dejalo así.
- Si creaste desde cero, escribí el nombre en minúsculas, sin espacios, con guiones: `gordos-invernada-octubre-2026`

### FECHA (obligatorio)
- **Qué es:** La fecha y hora del remate.
- **Cómo completarlo:** Hacé clic en el ícono de calendario y seleccioná la fecha. Luego poné la hora (formato 24hs, ej: `14:00` para las 2 de la tarde).
- **Zona horaria:** Dejala en UTC-03:00 (es Argentina).
- ⚠️ **MUY IMPORTANTE:** La web solo muestra remates con fecha de hoy o futura. Si ponés una fecha pasada, el remate no va a aparecer en el sitio aunque esté publicado.

### LUGAR (obligatorio)
- **Qué es:** El lugar físico donde se hace el remate.
- **Ejemplo:** `Washington, Córdoba, Argentina`
- **Cómo completarlo:** Escribí el texto directamente en el campo.

### BODY (opcional)
- **Qué es:** Una descripción del remate (texto largo). Aparece en la página de detalle del remate.
- **Ejemplo:** "800 vacunos anotados. 650 gordos - 150 invernada. Completá con tus datos y te contactamos."
- **Cómo completarlo:** Es un editor de texto enriquecido. Podés escribir, poner negritas, listas, etc. Funciona parecido a Word.
- Es opcional. Si no lo completás, simplemente no aparece nada en esa sección.

### PORTADA (obligatorio)
- **Qué es:** La foto principal del remate. Aparece en la card del home y en el detalle.
- **Cómo subir una foto:**
  1. Hacé clic en el campo "Portada"
  2. Aparece un panel. Hacé clic en **"Add media"**
  3. Elegí **"Upload asset"** si querés subir una foto nueva desde tu computadora
  4. Seleccioná el archivo de imagen (JPG o PNG, idealmente 800x600px o más)
  5. Esperá que termine de subir
  6. Hacé clic en **"Publish"** dentro del panel de la imagen para confirmarla
  7. Cerrá ese panel — la imagen va a quedar vinculada al remate

### FLYER (opcional)
- **Qué es:** Una imagen de flyer/afiche del remate. Solo aparece en la página de detalle, al lado del formulario.
- **Cómo subirlo:** Igual que la Portada (pasos del punto anterior).

### CATÁLOGO / DOCUMENT (opcional)
- **Qué es:** Un archivo PDF que los usuarios pueden descargar después de completar el formulario de registro.
- **Cuándo usarlo:** Cuando tengan un catálogo con los lotes del remate para compartir.
- **Cómo cargarlo:** Igual que las fotos, pero subís un archivo PDF en vez de imagen.
- ⚠️ Si no subís nada acá, el formulario simplemente dice "Solicitá más información" y manda los datos sin dar descarga. Si sí subís algo, el formulario dice "Accedé al contenido" y habilita el botón de descarga.

### VIDEOS (opcional)
- **Qué es:** Un link (URL) a videos del remate. Puede ser un link de YouTube, Google Drive, etc.
- **Cómo cargarlo:** Pegá la URL completa en el campo.

---

## 1.5 — Publicar el remate (paso CRUCIAL)

Una vez que completaste todos los campos:

**Paso 1:** Mirá la barra de la **derecha** del formulario. Vas a ver una sección que dice **"STATUS"**.

**Paso 2:** Vas a ver que dice **"Draft"** (borrador). El remate todavía NO está visible en la web.

**Paso 3:** Hacé clic en el botón verde **"Publish"**.

**Paso 4:** El estado va a cambiar a **"Published"** con un punto verde. Ahora sí aparece en la web.

> ✅ Para verificar: abrí darwash.com.ar en una pestaña nueva. Si el remate tiene fecha futura, ya debería aparecer en el home y en /remates.

---

## 1.6 — Editar un remate ya publicado

**Paso 1:** En Content → filtrá por Remates → encontrá el remate → hacé clic para abrirlo.

**Paso 2:** Editá el campo que necesitás cambiar.

**Paso 3:** En la barra de la derecha, el botón ahora dice **"Republish"** o **"Publish changes"**. Hacé clic ahí.

**Paso 4:** Los cambios se ven en la web en segundos.

---

## 1.7 — Despublicar o eliminar un remate

**Para ocultar sin borrar (recomendado):**
1. Abrí el remate
2. En la barra derecha, hacé clic en la flecha al lado del botón verde → **"Unpublish"**
3. El remate queda como "Draft" y desaparece de la web, pero lo podés volver a publicar cuando quieras.

**Para borrarlo definitivamente:**
1. En la lista de Content, buscá el remate
2. Hacé clic en los tres puntitos (...) → **"Delete"**
3. Confirmá. Esto no tiene vuelta atrás.

> 💡 **Tip:** Los remates con fecha pasada desaparecen solos de la web aunque sigan Published. No hace falta borrarlos — quedan archivados en Contentful por si los necesitás de referencia.

---

## 1.8 — CONTACTOS: Editar o agregar un integrante del equipo

La sección de Contacto en darwash.com.ar/contacto muestra las fotos y datos del equipo. Todo se maneja igual que los remates.

### Ver los contactos actuales:
En Content → filtrá por **Contactos** en la columna izquierda.

### Editar un contacto existente:
1. Hacé clic en el nombre del contacto para abrirlo
2. Editá los campos que necesitás
3. Hacé clic en **"Publish"** o **"Republish"**

### Campos de un Contacto:

**TÍTULO (obligatorio)**
- Nombre y apellido completo
- Ejemplo: `Miguel Lavaselli`

**EMAIL (obligatorio)**
- El email del contacto
- Ejemplo: `mlavaselli@hotmail.com`

**PHONE (obligatorio)**
- El teléfono en formato internacional, sin espacios ni guiones
- Ejemplo: `+5493584285117`
- ⚠️ Tiene que empezar con `+54 9` (código de Argentina + el 9 para celular) para que el botón de WhatsApp funcione bien.
- Formato correcto: `+5493584285117` (54 = Argentina, 9 = celular, luego el número sin el 0 inicial)

**AVATAR (obligatorio)**
- Foto de la persona. Tiene que ser una foto recortada en formato cuadrado o rectangular, sobre fondo claro.
- El marco circular lo agrega la web automáticamente, no lo necesitás editar vos.
- Cómo subir: igual que la portada de un remate (Add media → Upload asset)

**POSITION (obligatorio)**
- Un número que determina el orden en que aparece en la página
- Ejemplo: si querés que aparezca primero, ponés `1`. Si querés que sea el cuarto, ponés `4`.
- Para que aparezca antes que otro, tiene que tener un número menor.

### Agregar un contacto nuevo:
1. Hacé clic en **"Add entry"** → elegí **"Contactos"**
2. Completá todos los campos
3. Hacé clic en **"Publish"**

---

# PARTE 2 — EL DOMINIO: darwash.com.ar

## ¿Qué es el dominio?

El dominio es la dirección web: `darwash.com.ar`. Sin el dominio activo, la web no es accesible.

## Estado actual

- El dominio fue **transferido exitosamente** (tenés el documento oficial de NIC.ar)
- **Vence el 7 de junio de 2027**
- ⚠️ Acordate de renovarlo **antes del 7 de junio de 2027** o la web deja de funcionar.

## Dónde se administra

El dominio está en **NIC Argentina (nic.ar)**, que es el organismo oficial de dominios `.com.ar`.

## Cómo renovarlo cuando llegue la fecha

1. Ir a **https://nic.ar**
2. Hacer clic en **"Ingresar"**
3. Loguearse con el CUIT/CUIL y contraseña de quien quedó como titular (la persona o empresa que hizo la transferencia)
4. Buscar el dominio `darwash.com.ar`
5. Hacer clic en **"Renovar"**
6. Seguir los pasos de pago

> 💡 NIC.ar también manda emails recordatorios antes del vencimiento al mail del titular.

---

# PARTE 3 — EDITAR EL CÓDIGO: cambios en diseño y textos fijos

## ¿Cuándo necesitás editar el código?

El código controla cosas que NO están en Contentful:
- Los textos de la página **Nosotros**
- Los datos del **Footer** (mail, WhatsApp, Instagram)
- Los **colores** de la web
- Las **imágenes de fondo**
- La **tipografía**
- El texto del **Hero** (el encabezado del home: "Líderes en el mercado ganadero", etc.)

## ¿Qué necesitás para editar el código?

Solo una herramienta gratuita: **Visual Studio Code (VS Code)**

### Instalar VS Code:

**Paso 1:** Ir a **https://code.visualstudio.com**

**Paso 2:** Hacer clic en el botón azul de descarga (detecta tu sistema operativo automáticamente).

**Paso 3:** Instalar el programa como cualquier otro (siguiente, siguiente, instalar).

## 3.1 — Abrir el proyecto en VS Code

**Paso 1:** Descomprimí el archivo ZIP que te entregaron (`cliente-darwash-web-remates-main.zip`). Hacé clic derecho → "Extraer aquí" o "Descomprimir". Te va a crear una carpeta.

**Paso 2:** Abrí VS Code.

**Paso 3:** En VS Code, en el menú de arriba hacé clic en **File (Archivo)** → **"Open Folder..."** (Abrir carpeta).

**Paso 4:** Navegá hasta la carpeta que descomprimiste y seleccionála. Hacé clic en **"Seleccionar carpeta"**.

**Paso 5:** VS Code muestra todos los archivos del proyecto en la columna izquierda. Eso es el proyecto completo.

## 3.2 — Cómo navegar los archivos

En la columna izquierda de VS Code vas a ver carpetas y archivos. Las más importantes:

```
📁 src/
   📁 pages/          ← Las páginas de la web
      nosotros.jsx    ← Página "Nosotros"
      contacto.jsx    ← Página "Contacto"
      index.jsx       ← Página de inicio (home)
   📁 layout/
      Footer.jsx      ← El pie de página (mail, WA, Instagram)
      Header.jsx      ← La barra de navegación superior
   📁 components/
      Hero.jsx        ← El encabezado grande del home
   📁 styles/
      _custom.scss    ← Los colores y tipografías de toda la web
      📁 components/
         _base.scss   ← Estilos generales
         _footer.scss ← Estilos del footer
         _hero.scss   ← Estilos del encabezado
```

Para abrir un archivo, hacé clic en su nombre en la columna izquierda. El contenido aparece en el área central.

## 3.3 — Cambiar textos de la página NOSOTROS

**Archivo a editar:** `src/pages/nosotros.jsx`

**Paso 1:** En VS Code, clic en la carpeta `src` → `pages` → clic en `nosotros.jsx`

**Paso 2:** Vas a ver el contenido de la página. Los textos están entre comillas o entre etiquetas `<p>` y `</p>`.

**Paso 3:** Para encontrar rápido un texto, usá el buscador: presioná **Ctrl+F** (Windows) o **Cmd+F** (Mac), escribí las primeras palabras del texto que querés cambiar, y VS Code lo resalta.

**Paso 4:** Hacé clic directamente sobre el texto que querés cambiar y editalo. **Solo tocá el texto entre las etiquetas, nunca las etiquetas mismas.**

Ejemplo — lo que VES en el código:
```
<p>Nos dedicamos a ofrecer soluciones a medida para los productores ganaderos</p>
```
Lo que podés cambiar: `Nos dedicamos a ofrecer soluciones a medida para los productores ganaderos`
Lo que NO tocás: `<p>` y `</p>`

**Paso 5:** Guardá el archivo con **Ctrl+S** (Windows) o **Cmd+S** (Mac).

## 3.4 — Cambiar datos del FOOTER (mail, WhatsApp, Instagram)

**Archivo a editar:** `src/layout/Footer.jsx`

**Paso 1:** Abrí el archivo `Footer.jsx`

**Paso 2:** Buscá estas líneas y cambiá solo los datos (no toques el resto):

**Para cambiar el mail:**
```jsx
href="mailto: darwashsa@gmail.com"
```
Cambiá `darwashsa@gmail.com` por el nuevo mail.

**Para cambiar el WhatsApp:**
```jsx
href="https://wa.me/+5493584127552"
```
Cambiá el número (el formato tiene que seguir siendo `+549` + el número sin el 0 inicial).
También cambiá el texto que se ve:
```
+54 9 358 4127 552
```

**Para cambiar el Instagram:**
```jsx
href="https://www.instagram.com/darwash.sa/"
```
Cambiá `darwash.sa` por el nuevo usuario de Instagram.

**Paso 3:** Guardá con **Ctrl+S**.

## 3.5 — Cambiar el texto del HOME (la pantalla principal)

**Archivo a editar:** `src/components/Hero.jsx`

**Paso 1:** Abrí el archivo `Hero.jsx`

**Paso 2:** Buscá y modificá estos textos:

```jsx
<h1>Líderes en el mercado ganadero</h1>
```
→ Ese es el título grande del home.

```jsx
<h4>Trabajamos para lograr buenos negocios, sólidas relaciones comerciales y amistades duraderas</h4>
```
→ Ese es el subtítulo.

```jsx
<p>Remates Ferias - Consignaciones - Operaciones Particulares - Remates Televisados - Remates de Reproductores</p>
```
→ Esa es la lista de servicios.

**Paso 3:** Guardá con **Ctrl+S**.

## 3.6 — Cambiar los COLORES de la web

**Archivo a editar:** `src/styles/_custom.scss`

**Paso 1:** Abrí el archivo `_custom.scss`

**Paso 2:** Vas a ver estas líneas al principio:

```scss
$brand-1: #0d6c79 !default;   ← Color principal (azul/verde oscuro)
$brand-2: #b5aa81 !default;   ← Color secundario (dorado/ocre)
```

**Paso 3:** Para cambiar un color, reemplazá el código hexadecimal (el `#0d6c79`) por el nuevo color.

Los colores se expresan en código hex. Algunos ejemplos:
- `#000000` = negro
- `#ffffff` = blanco
- `#ff0000` = rojo
- `#0000ff` = azul puro

Para encontrar el código hex de cualquier color, podés buscar en Google "color picker" o ir a **https://colorpicker.me** y seleccionar el color que querés.

**Paso 4:** Guardá con **Ctrl+S**.

## 3.7 — Cambiar las imágenes de fondo

**Carpeta:** `public/images/`

Las imágenes de fondo se llaman `background-1.png`, `background-2.png`, etc.

**Para reemplazar una:**
1. Preparé la imagen nueva con el mismo nombre exacto (`background-1.png` por ejemplo)
2. Copiala y pegala en la carpeta `public/images/` del proyecto
3. Cuando te pregunte si querés reemplazar, decís que sí

---

# PARTE 4 — SUBIR LOS CAMBIOS DE CÓDIGO A LA WEB

Cuando editás archivos en VS Code, los cambios son **solo en tu computadora**. Para que se vean en darwash.com.ar, hay que subirlos a internet.

## ¿Cómo se sube?

El proceso se llama **"deploy"** y se hace a través de **Vercel** (el hosting). La forma más simple es usar la web de Vercel directamente.

## 4.1 — Acceder a Vercel

**Paso 1:** Ir a **https://vercel.com**

**Paso 2:** Hacer clic en **"Log In"**

**Paso 3:** Loguearse con la cuenta que tenía la empresa anterior (necesitás pedirles el acceso a este panel, o que te transfieran el proyecto).

## 4.2 — Subir los archivos manualmente (sin GitHub)

Si no tienen acceso a Vercel pero tienen el código modificado, la opción más simple es:

**Paso 1:** En VS Code, abrí la Terminal integrada: menú **Terminal** → **"New Terminal"**

**Paso 2:** En la terminal que aparece abajo, instalá la herramienta de Vercel escribiendo:
```
npm install -g vercel
```
Presioná Enter y esperá que termine.

**Paso 3:** Luego escribí:
```
vercel login
```
Presioná Enter. Te va a pedir el email de la cuenta de Vercel. Ingresalo, te llega un mail de confirmación, hacés clic en el link del mail y listo.

**Paso 4:** Para subir el proyecto escribí:
```
vercel --prod
```
Presioná Enter. Vercel sube el proyecto y en unos minutos los cambios se ven en darwash.com.ar.

> ⚠️ Este proceso lo hacés **solo cuando cambiaste algo en el código**. Los cambios en Contentful (remates, contactos) se ven inmediatamente sin hacer nada acá.

---

# PARTE 5 — REFERENCIA RÁPIDA

## Tareas del día a día

| Tarea | Dónde | Pasos |
|---|---|---|
| Cargar remate nuevo | Contentful → Content → Add Entry → Remates | Completar campos → Publish |
| Editar remate | Contentful → Content → buscar remate → clic | Editar → Publish |
| Ocultar remate | Contentful → abrir remate → Unpublish | — |
| Agregar contacto | Contentful → Content → Add Entry → Contactos | Completar campos → Publish |
| Editar contacto | Contentful → Content → filtrar Contactos → clic | Editar → Publish |
| Cambiar texto Nosotros | VS Code → src/pages/nosotros.jsx | Editar texto → Guardar → Deploy |
| Cambiar footer | VS Code → src/layout/Footer.jsx | Editar → Guardar → Deploy |
| Cambiar colores | VS Code → src/styles/_custom.scss | Cambiar código hex → Guardar → Deploy |

## Problemas frecuentes y soluciones

**❌ "Cargué un remate pero no aparece en la web"**
→ Verificá que esté en estado **Published** (no Draft). También verificá que la **fecha sea futura** (hoy o después).

**❌ "Publiqué cambios pero la web sigue igual"**
→ Esperá 30 segundos y recargá la página con **Ctrl+F5** (recarga forzada que limpia el caché).

**❌ "El botón de WhatsApp de un contacto no funciona"**
→ El teléfono tiene que estar en formato `+5493XXXXXXXXX` (sin espacios ni guiones). El `9` después del 54 es obligatorio para celulares argentinos.

**❌ "Subí una foto pero no se ve en la web"**
→ Dentro de Contentful, verificá que la foto también esté en estado **Published** (a veces se sube pero queda sin publicar).

---

## Accesos importantes

| Plataforma | URL | Usuario | Contraseña |
|---|---|---|---|
| Contentful (CMS) | be.contentful.com/login | marcapriglioni@gmail.com | Patanete515 |
| Vercel (hosting) | vercel.com | *(consultar acceso)* | — |
| NIC.ar (dominio) | nic.ar | *(titular del dominio)* | — |

**Vencimiento del dominio darwash.com.ar: 7 de junio de 2027**

---

*Manual preparado por Koru Agency — nachobarberoncm@gmail.com*
*Cualquier consulta técnica, contactar antes de realizar cambios en producción.*

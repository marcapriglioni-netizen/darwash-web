# Guía de Administración — darwash.com.ar
**Preparada por Koru Agency**

---

## Cómo funciona la web (visión general)

La web de Darwash tiene **3 capas**:

```
CONTENTFUL (CMS)  →  CÓDIGO (Next.js en GitHub)  →  VERCEL (hosting)
    Acá cargás           Acá está la lógica           Acá vive online
    los remates          de la página
```

**Para el día a día, solo usás Contentful.** Vercel y GitHub son para cambios técnicos en el diseño o estructura.

---

## PARTE 1: CONTENTFUL — Cargar y editar remates

Contentful es el panel de administración de contenido. Todo lo que aparece en la web (remates, fechas, imágenes, catálogos) sale desde acá.

### 1.1 — Ingresar

1. Ir a **app.contentful.com**
2. Loguearse con el mail/contraseña de Darwash
3. Seleccionar el Space "Darwash" (o similar)

### 1.2 — Estructura de un Remate

Cada remate es una "entrada" (entry) con estos campos:

| Campo | Qué es | Obligatorio |
|---|---|---|
| **title** | Nombre del remate (ej: "Remate Invernada Junio") | ✅ Sí |
| **slug** | URL amigable (ej: "remate-invernada-junio") | ✅ Sí |
| **date** | Fecha y hora del remate | ✅ Sí |
| **place** | Lugar (ej: "Washington, Córdoba") | ✅ Sí |
| **cover** | Imagen principal (la que aparece en la card) | ✅ Sí |
| **body** | Descripción larga del remate (texto enriquecido) | No |
| **flyer** | Imagen del flyer del remate | No |
| **document** | Link al PDF del catálogo | No |
| **videos** | Link a videos del remate | No |

### 1.3 — Crear un remate nuevo (paso a paso)

1. En el panel izquierdo, clic en **Content**
2. Clic en **Add entry** (botón azul arriba a la derecha)
3. Seleccionar el tipo **"remates"**
4. Completar los campos:
   - **title**: nombre del remate
   - **slug**: escribir el nombre en minúsculas sin espacios, con guiones (ej: `remate-gordos-julio-2026`)
   - **date**: fecha del evento (⚠️ importante: la web solo muestra remates con fecha FUTURA)
   - **place**: lugar
   - **cover**: subir imagen → clic en "Add media" → "Upload asset" → subir el archivo
5. Clic en **Publish** (arriba a la derecha, botón verde)

> ⚠️ Si no das clic en Publish, el remate NO aparece en la web.

### 1.4 — Editar un remate existente

1. Content → buscar el remate → clic para abrirlo
2. Editar el campo que necesitás
3. Clic en **Publish** (o "Republish" si ya estaba publicado)

### 1.5 — Eliminar / ocultar un remate

- Para **despublicarlo** (ocultarlo sin borrar): clic en el botón de estado → "Unpublish"
- Para **borrarlo**: menú de opciones (tres puntos) → "Delete"

> La web filtra automáticamente los remates pasados. Un remate con fecha anterior a hoy NO aparece aunque esté publicado.

---

## PARTE 2: VERCEL — El hosting

Vercel es donde vive la web online. En condiciones normales, **no necesitás tocarlo**.

### Cuándo entrar a Vercel

- Si la web está caída o con error
- Si hay que cambiar variables de entorno (tokens, claves de API)
- Si se hizo un cambio en el código y hay que ver si se deployó bien

### Cómo entrar

1. Ir a **vercel.com** → Log in
2. Buscar el proyecto "darwash" o "cliente-darwash"

### Variables de entorno (importante)

Son las "claves secretas" que conectan la web con Contentful y otros servicios. Están guardadas en Vercel → Settings → Environment Variables:

| Variable | Para qué sirve |
|---|---|
| `CONTENTFUL_SPACE_ID` | ID del espacio en Contentful |
| `CONTENTFUL_ACCESS_TOKEN` | Clave de acceso a Contentful |
| `NEXT_PUBLIC_ENDPOINT_HOOK` | Webhook que recibe los formularios de registro |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` | Google Tag Manager (analítica) |
| `FB_ACCESS_TOKEN` | Facebook conversions API |

> ⚠️ Estas claves **nunca se comparten** ni se escriben en el código. Si las perdés, se generan nuevas desde Contentful → Settings → API Keys.

---

## PARTE 3: EL DOMINIO — darwash.com.ar

### Situación actual
- **Dominio**: darwash.com.ar
- **Estado**: Transferido exitosamente (PDF oficial NIC.ar)
- **Vencimiento**: 7 de junio de 2027 ⏰ (acordate renovar 30 días antes)

### Dónde administrarlo
- Ir a **nic.ar** → "Administrar dominios"
- Loguearse con la cuenta CUIT/CUIL que quedó como titular tras la transferencia

### Qué revisar una vez al año
- Renovar el dominio antes del vencimiento
- Verificar que los DNS (registros que apuntan al hosting) siguen correctos

### DNS actuales (probablemente)
Los DNS deberían apuntar a Vercel. En NIC.ar, dentro del dominio, deberían verse registros tipo:
```
CNAME  www  →  cname.vercel-dns.com
A      @    →  76.76.21.21
```

---

## PARTE 4: CÓMO ESTÁ ARMADA LA WEB (para referencia)

Esto no lo necesitás tocar día a día, pero es bueno que lo entiendas.

### Páginas que tiene el sitio

| URL | Qué muestra |
|---|---|
| `/` | Slider con los próximos remates |
| `/remates` | Cards de todos los remates futuros |
| `/remates/[id]/[slug]` | Detalle de un remate + formulario de registro |
| `/remates/[id]/gracias` | Página de confirmación tras registrarse |
| `/nosotros` | Información sobre Darwash S.A. |
| `/contacto` | Página de contacto |

### Flujo cuando alguien se registra a un remate

1. El usuario completa el formulario en `/remates/[id]/[slug]`
2. Los datos (nombre, apellido, email, teléfono) van al **webhook** configurado en `NEXT_PUBLIC_ENDPOINT_HOOK`
3. Si hay catálogo (PDF) o videos cargados en Contentful, se habilita el botón de descarga
4. Se dispara un evento en **Google Tag Manager** para trackear conversiones

### Link al sistema de gestión propio de Darwash
En el header hay un botón "Iniciar Sesión" que lleva a:
`https://darwash.clientes.physis.com.ar/phy2web/auth/usuario`

Ese es un sistema externo (Physis) que **no depende del código** de esta web.

---

## PARTE 5: TAREAS FRECUENTES — Referencia rápida

### Publicar un remate nuevo
→ Contentful → Content → Add entry → remates → completar campos → Publish

### Cambiar fecha de un remate
→ Contentful → buscar el remate → editar campo "date" → Publish

### Agregar catálogo PDF a un remate
→ Contentful → abrir el remate → campo "document" → pegar el link del PDF → Publish

### La web no muestra un remate que cargué
Verificar: ¿está publicado? ¿La fecha es futura (no pasada)?

### Cambiar el mail o WhatsApp del footer
→ Requiere editar el archivo `src/layout/Footer.jsx` en el código. Pedíselo al programador o a Koru Agency.

### Cambiar texto de "Nosotros"
→ Requiere editar `src/pages/nosotros.jsx`. Pedíselo al programador o a Koru Agency.

---

## ACCESOS QUE NECESITÁS TENER

Asegurate de tener usuario/contraseña de estas 3 plataformas:

- [ ] **app.contentful.com** — para cargar remates (uso diario)
- [ ] **vercel.com** — para el hosting (uso ocasional)
- [ ] **nic.ar** — para el dominio (uso anual)

---

*Guía preparada por Koru Agency — Cualquier duda, consultá antes de tocar.*

# Clinic Management Platform Public

Aplicacion web full-stack orientada a la gestion de una clinica, preparada como version publica de portfolio.

Este proyecto muestra una plataforma realista con:

- web publica orientada a conversion
- autenticacion y separacion de roles
- reserva de citas
- pagos online
- panel profesional
- chat y videollamada
- blog gestionable desde dashboard

La version publicada en este repositorio ha sido saneada para GitHub publico:

- sin credenciales reales
- sin datos personales identificables
- sin marca original
- sin configuracion sensible de produccion

## Resumen Ejecutivo

Este repositorio esta pensado para que un recruiter o hiring manager pueda evaluar rapidamente capacidad de producto, criterio tecnico y solvencia full-stack.

El proyecto no se limita a pantallas sueltas. Reune varias piezas que suelen aparecer en aplicaciones reales:

- frontend moderno con `Next.js` y `React`
- backend con route handlers y logica en servidor
- autenticacion, roles y persistencia con `Supabase`
- integraciones de negocio con `Stripe`, `Resend` y `Daily`
- foco en seguridad basica de publicacion
- estructura modular mantenible

## Que Demuestra

- Capacidad para construir una aplicacion full-stack completa.
- Criterio para separar area publica, area cliente y dashboard privado.
- Integracion de servicios externos con flujos reales de negocio.
- Trabajo con autenticacion, sesiones y permisos por rol.
- Manejo de pagos con confirmacion server-side por webhook.
- Construccion de experiencia de usuario mas alla del CRUD clasico.
- Atencion a SEO, metadata, schema y presentacion de producto.
- Preparacion de una version publica segura para portfolio.

## Problema De Negocio Que Resuelve

Muchas clinicas pequenas operan con herramientas separadas para:

- mostrar servicios
- captar contactos
- agendar sesiones
- cobrar online
- comunicarse con clientes
- publicar contenido

Este proyecto unifica esos flujos dentro de una sola aplicacion web.

## Funcionalidades Principales

### Area Publica

- Home comercial y paginas de servicio.
- Blog publico.
- Secciones SEO con metadata y schema markup.
- Formularios de contacto y captacion.

### Area Cliente

- Registro e inicio de sesion.
- Visualizacion de disponibilidad.
- Reserva de citas.
- Checkout de pago.
- Seguimiento de proximas sesiones.
- Chat con el profesional.
- Acceso a videollamada.

### Area Profesional

- Dashboard privado.
- Calendario operativo.
- Gestion de disponibilidad.
- Gestion de servicios.
- Creacion manual de citas.
- Gestion del blog.

## Arquitectura

El proyecto esta organizado como una aplicacion `Next.js` con `App Router`.

### Estructura General

```text
app/
  api/
  auth/
  blog/
  cliente/
  dashboard/
  fisioterapia/
  psicologia/
  legal/

components/
  blog/
  chat/
  ClienteDash/
  forms/
  layout/
  Modal/

hooks/
lib/
public/
```

### Decisiones Relevantes

- La parte publica y la privada conviven en la misma codebase.
- La logica sensible se resuelve en servidor cuando tiene sentido.
- Las integraciones externas estan aisladas en utilidades y clientes compartidos.
- El proyecto diferencia claramente entre cliente publico y operaciones con privilegios.
- Los pagos se confirman con webhook, no fiandose del estado desde cliente.

## Flujo Funcional Principal

1. El cliente consulta disponibilidad.
2. Selecciona servicio y franja.
3. El sistema crea una sesion de pago con `Stripe`.
4. Tras el pago, el webhook confirma el evento firmado.
5. La aplicacion crea la cita y bloquea la franja.
6. Se registra el pago.
7. Se notifican cliente y profesional.
8. El seguimiento puede continuar por chat o videollamada.

## Stack Tecnologico

| Capa | Tecnologias |
| --- | --- |
| Frontend | `Next.js 16`, `React 19`, `Tailwind CSS 4` |
| Estado / UI | Componentes modulares, formularios, modales, vistas de calendario |
| Backend | Route Handlers de `Next.js`, logica server-side |
| Auth y datos | `Supabase` |
| Pagos | `Stripe` |
| Email | `Resend` |
| Videollamada | `Daily` |
| Analitica | `Vercel Analytics` |

## Integraciones Tecnicas

### Supabase

- autenticacion
- perfiles de usuario
- consultas por rol
- persistencia de citas, servicios y disponibilidad
- soporte para experiencia en tiempo real

### Stripe

- creacion de checkout session
- recuperacion de sesion
- webhook para confirmacion del pago

### Resend

- emails transaccionales de reserva y confirmacion

### Daily

- creacion dinamica de salas de videollamada

## Seguridad Y Preparacion Para Publicacion

Esta version publica fue adaptada especificamente para portfolio:

- datos reales sustituidos por placeholders profesionales
- emails y telefonos anonimizados
- eliminacion de assets personales y restos exportados en `public/`
- `.env.local` excluido por `.gitignore`
- `.env.example` mantenido para onboarding local
- respuestas de API con mensajes genericos al cliente
- logs detallados limitados a desarrollo cuando aplica
- `productionBrowserSourceMaps` desactivado
- revision de `Content-Security-Policy` para evitar dominios privados innecesarios

## Version Publica Vs Version Real

Este repositorio busca mostrar el valor tecnico del proyecto sin comprometer informacion sensible.

Por eso:

- la marca original ha sido neutralizada
- los textos legales se han adaptado a contexto portfolio
- la configuracion de produccion no esta incluida
- algunos textos publicos se han orientado a demo profesional

## Variables De Entorno

El proyecto espera variables como las siguientes:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `DAILY_API_KEY`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `NEXT_PUBLIC_WEB_URL`
- `NEXT_PUBLIC_BASE_URL`
- `NEXT_PUBLIC_SITE_URL`

Referencia: [`.env.example`](C:/Users/joaka/Desktop/clinic-management-platform-public/.env.example)

## Como Ejecutarlo En Local

```bash
npm install
npm run dev
```

Aplicacion local:

```text
http://localhost:3000
```

## Que Revisaria Un Equipo Tecnico

Si este proyecto se reutilizara para produccion, las siguientes piezas serian el siguiente paso natural:

- endurecimiento adicional de validaciones y observabilidad
- testing automatizado de flujos criticos
- refinado legal y de consentimiento
- despliegue con entorno separado por ambientes
- revision funcional completa de integraciones externas

## Por Que Este Proyecto Es Relevante Para Un Recruiter IT

Porque permite evaluar en una sola base de codigo:

- nivel de autonomia
- criterio de arquitectura
- capacidad de conectar frontend, backend e integraciones
- comprension de flujos reales de negocio
- sensibilidad por seguridad y publicacion responsable
- presentacion profesional de un proyecto complejo

## Estado Del Repositorio

- listo para portfolio publico
- saneado para GitHub
- orientado a revision tecnica y de producto

## Nota Final

Este repositorio no pretende ser una demo trivial. Está preparado para enseñar como se disena y conecta una aplicacion web con multiples flujos reales y dependencias externas, manteniendo al mismo tiempo una presentacion profesional y segura para contexto de seleccion.

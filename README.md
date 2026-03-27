# Clinic Management Platform (Public)

Aplicación web full-stack orientada a la gestión de una clínica, preparada como versión pública de portfolio.

Este proyecto muestra una plataforma realista con:

- web pública orientada a conversión  
- autenticación y separación de roles  
- reserva de citas  
- pagos online  
- panel profesional  
- chat y videollamada  
- blog gestionable desde dashboard  

La versión publicada en este repositorio ha sido saneada para GitHub público:

- sin credenciales reales  
- sin datos personales identificables  
- sin marca original  
- sin configuración sensible de producción  

---

## Resumen Ejecutivo

Este repositorio está pensado para que un recruiter o hiring manager pueda evaluar rápidamente la capacidad de producto, el criterio técnico y la solvencia full-stack.

El proyecto no se limita a pantallas aisladas. Reúne varias piezas habituales en aplicaciones reales:

- frontend moderno con `Next.js` y `React`  
- backend con route handlers y lógica en servidor  
- autenticación, roles y persistencia con `Supabase`  
- integraciones de negocio con `Stripe`, `Resend` y `Daily`  
- foco en seguridad básica de publicación  
- estructura modular mantenible  

---

## Qué Demuestra

- Capacidad para construir una aplicación full-stack completa  
- Criterio para separar área pública, área cliente y dashboard privado  
- Integración de servicios externos con flujos reales de negocio  
- Trabajo con autenticación, sesiones y permisos por rol  
- Manejo de pagos con confirmación server-side mediante webhook  
- Construcción de experiencia de usuario más allá del CRUD clásico  
- Atención a SEO, metadata, schema y presentación de producto  
- Preparación de una versión pública segura para portfolio  

---

## Problema de Negocio que Resuelve

Muchas clínicas pequeñas operan con herramientas separadas para:

- mostrar servicios  
- captar contactos  
- agendar sesiones  
- cobrar online  
- comunicarse con clientes  
- publicar contenido  

Este proyecto unifica estos flujos dentro de una sola aplicación web.

---

## Funcionalidades Principales

### Área Pública

- Home comercial y páginas de servicio  
- Blog público  
- Secciones SEO con metadata y schema markup  
- Formularios de contacto y captación  

### Área Cliente

- Registro e inicio de sesión  
- Visualización de disponibilidad  
- Reserva de citas  
- Checkout de pago  
- Seguimiento de próximas sesiones  
- Chat con el profesional  
- Acceso a videollamada  

### Área Profesional

- Dashboard privado  
- Calendario operativo  
- Gestión de disponibilidad  
- Gestión de servicios  
- Creación manual de citas  
- Gestión del blog  

---

## Arquitectura

El proyecto está organizado como una aplicación `Next.js` con `App Router`.

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

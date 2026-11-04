# Revisión técnica — Nexus Orders API (2026-11-04)

## Evidencia de código

- `src/app.module.ts`: almacenamiento local better-sqlite3 mediante TypeORM; `synchronize: true`.
- `src/presentation/controllers/order.controller.ts`: operaciones POST/GET/PATCH, acceso desde controlador al repositorio concreto e interacción directa con `repository`.
- `src/domain/entities/order.entity.ts`: lógica de transición PENDING → PROCESSING → COMPLETED en entidad de dominio, pero el endpoint PATCH escribe COMPLETED directamente y no aplica esa transición.

## Prioridad P0: antes de recibir datos reales

- Sustituir sincronización automática por migraciones; definir backups restaurables.
- Revisar invariantes de transición del endpoint de completar pedidos y desacoplar infraestructura.
- Validar DTO: IDs, precios, cantidades, tamaños máximos y errores consistentes.
- Autenticación/autorización por cuenta; evitar acceso anónimo al listado de pedidos.
- Revisar y controlar CORS, rate limiting y logs sensibles.

## Prioridad P1: pruebas e integración

- Unit tests de casos de uso e invariantes de estados.
- E2E de creación, listado y completado, incluyendo rutas fallidas.
- Contrato OpenAPI versionado y pruebas frontend-backend.
- Contenedorización opcional después de aclarar persistencia y despliegue.

**Estado:** plan de ingeniería, no certificación de seguridad ni resultado de ejecución. Conservar el historial y no modificar el backend de producción sin pruebas.

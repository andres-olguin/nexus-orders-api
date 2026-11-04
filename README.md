# Nexus Orders API — NestJS

Backend experimental para registrar pedidos y gestionar estados. Arquitectura de dominio, casos de uso, controladores e infraestructura con NestJS 11, TypeORM y SQLite.

## Estado observado

- `POST /orders`: creación de pedidos mediante DTO.
- `GET /orders`: listado de pedidos.
- `PATCH /orders/:id/complete`: cambio de estado (su lógica actual requiere endurecimiento).
- Configuración local de SQLite en `src/app.module.ts`; `synchronize: true` solo puede utilizarse en un entorno de desarrollo descartable.
- No hay autenticación ni autorización empresarial verificadas. **No exponer directamente a Internet.**

## Arranque local

```bash
npm ci
npm run start:dev
npm test -- --runInBand
npm run build
```

Por defecto escucha en puerto 3000; los datos pueden persistirse en `nexus.db`. No versionar bases locales ni contenido sensible. Verificar la carpeta `src/application`, `src/domain`, `src/infrastructure` y `src/presentation`.

## Integración

El frontend está en el repositorio separado `nexus-orders-dashboard`. El dashboard consume `http://localhost:3000/orders` de forma predeterminada; verificar contrato, CORS y errores del API.

## Siguientes requisitos para cualquier piloto

1. Sustituir `synchronize: true` por migraciones versionadas.
2. Validar esquema de pedidos, cantidades, montos, estados y transiciones de dominio.
3. Añadir autenticación, autorización y pruebas de aislamiento entre organizaciones.
4. Reducir el acoplamiento del controlador con repositorios de infraestructura.
5. Implementar logging estructurado sin PII, métricas y pruebas e2e.
6. Verificar recuperación de base, backups y despliegue seguro.

Consultar `docs/ENGINEERING_REVIEW_2026-11-04.md`. No se afirma que estas tareas estén implementadas.

# nexus-orders-api — Arquitectura y escalabilidad basada en evidencia

**Corte:** 2026-11-04 · **Estado:** documento de ingeniería (propuesta) · **Responsabilidad:** revisión técnica humana antes de prometer capacidades.  
**No constituye:** certificación, cumplimiento normativo, validación de mercado ni garantía de producción.

## 1. Línea base comprobada

NestJS con entidad Order, casos de uso y repositorio TypeORM/SQLite; la CI añadida falla en npm ci por package-lock.json incoherente.

## 2. Arquitectura objetivo proporcional al problema

Corregir dependencias antes de ampliar. Consolidar estados y transiciones en dominio, validación DTO, migraciones versionadas y repositorios tipados. Para entorno SaaS, PostgreSQL y aislamiento por tenant solo después de tests; API OpenAPI estable, no acceso a propiedades internas de TypeORM desde controlador.

**Principio de evolución:** escalar verticalmente y reducir cuellos de botella medidos antes de añadir infraestructura horizontal, colas y servicios separados. Elegir proveedor según costos, soberanía y operación, no solo prestigio tecnológico.

## 3. Experimentos de escalabilidad y calidad

Medir solicitudes/segundo, p95 crear/listar/actualizar pedido, CPU, conexiones a DB, bloqueo de escrituras y costo por 1k pedidos. Benchmark con concurrencia moderada antes de balanceo horizontal.

En cada ejecución documentar hardware/runtime, dataset, comandos, carga, fecha, mediana y dispersión. Reportar errores y fallas; la incorporación del presente documento **no** cuenta como ejecución de benchmark.

## 4. Seguridad, titularidad y límites para un piloto

Bloqueadores: `npm ci` no reproducible (#2), sin autorización, `synchronize: true`, endpoint completar evita flujo de dominio. No usar pedidos reales ni exponer API hasta cerrar P0.

Requisitos transversales: autenticación/autorización cuando hay cuentas, minimización de datos, backups ensayados, contratos si hay clientes, secretos fuera de GitHub y fuentes con fecha de cada requisito legal. No cambiar titularidad de proyectos académicos ni reutilizar datos de terceros sin derechos.

## 5. Secuencia de trabajo por gates

G1: lockfile coherente y CI. G2: contrato, auth y estados. G3: tests e2e/tenant y backups. G4: piloto controlado con reporte de latencias y fallos.

**Criterio de fin de cada gate:** PR o commit, prueba reproducible y reporte explícito de qué fue medido, qué no se comprobó y riesgos P0/P1 abiertos. No asignar fechas ni presupuesto sin datos de capacidad y aprobación.

## 6. Base metodológica

- [AWS Well-Architected](https://docs.aws.amazon.com/wellarchitected/): fiabilidad, rendimiento, costo, seguridad y operación.
- [OWASP ASVS 5.0](https://asvs.owasp.org/): requisitos de verificación de apps y APIs, según aplicabilidad.
- [NIST SSDF SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final): desarrollo seguro.
- [Google SRE — SLOs](https://sre.google/workbook/implementing-slos/): decisiones de fiabilidad con datos.
- [OpenTelemetry](https://opentelemetry.io/docs/concepts/observability-primer/): métricas, trazas y logs, cuando sean relevantes.

**Fecha de consulta:** 2026-11-04. Son guías generales: ninguna certifica este software ni respalda ventas o rendimiento no medido.

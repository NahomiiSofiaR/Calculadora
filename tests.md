# 🧪 Documentación de Pruebas - Proyecto Calculadora (JavaScript)

## 📘 Descripción general
Este proyecto implementa una calculadora con las operaciones básicas: suma, resta, multiplicación y división.  
Se realizaron tres tipos de pruebas: **unitarias**, **de integración** y **de rendimiento** usando Jest.

---

## ✅ Prueba unitaria: `suma correcta`
**Objetivo:** Comprobar que la función `sumar()` devuelve el resultado correcto.  
**Entrada:** `sumar(2, 3)`  
**Resultado esperado:** `5`  
**Resultado obtenido:** `5`  
**Estado:** ✔ Aprobada

---

## 🔗 Prueba de integración: `operaciones encadenadas`
**Objetivo:** Verificar que las funciones pueden usarse juntas correctamente.  
**Operación:** `(2 + 3) * (10 - 4)`  
**Resultado esperado:** `30`  
**Resultado obtenido:** `30`  
**Estado:** ✔ Aprobada

---

## ⚡ Prueba de rendimiento: `ejecutar suma 100,000 veces`
**Objetivo:** Evaluar el comportamiento de la función `sumar()` bajo carga repetitiva.  
**Prueba:** Ejecutar `sumar(10, 20)` 100,000 veces.  
**Resultado esperado:** Termina sin errores ni lentitud excesiva.  
**Estado:** ✔ Aprobada

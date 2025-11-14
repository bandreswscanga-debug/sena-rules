SENA Rules — Build & Play

Esta es una mini aplicación en React que permite visualizar, filtrar y marcar como cumplidas las normas básicas del Reglamento del Aprendiz SENA. El objetivo del proyecto es practicar los fundamentos de React: componentes, props, estado, eventos y composición aplicados a un caso real.

Características principales

Búsqueda de normas en tiempo real.

Filtro por categoría.

Tarjetas interactivas con opción “Compliant”.

Barra de progreso global.

Contador de normas completadas.

Interfaz limpia, accesible y responsiva.
Componentes incluidos
Header

Muestra el título de la aplicación.

SearchBar

Input controlado que filtra normas por texto.

CategoryFilter

Select para filtrar normas por categoría.

StatsCounter

Contador global de normas cumplidas.

ProgressBar

Barra que muestra el avance total del cumplimiento.

RuleList

Renderiza las normas filtradas.

RuleCard

Tarjeta con título, categoría, descripción y un botón para marcar como “Compliant”.

Estado y flujo de datos

App.jsx maneja el estado global: búsqueda, categoría seleccionada y cumplimiento de normas.

Los componentes hijos envían cambios al padre mediante callbacks.

Decisiones de diseño

Interfaz minimalista enfocada en claridad.

Componentes reutilizables para evitar duplicación.

Barra de progreso y contador para una mejor experiencia.

Búsqueda y filtrado funcionan juntos para mayor precisión.

Vista previa

Criterios cumplidos

Filtrado en tiempo real.

Marcar normas como cumplidas.

Tres componentes adicionales.

Manejo correcto de props, estado y eventos.

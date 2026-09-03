# Portafolio personal y landing page

Portafolio web personal e interactivo, construido desde cero con herramientas modernas del ecosistema front-end. Además de presentar mis habilidades como desarrollador, este proyecto representa un hito de **autoaprendizaje, disciplina y dominio técnico autónomo**.

## Stack tecnológico

| Área                 | Tecnología                           | Uso principal                                |
| -------------------- | ------------------------------------ | -------------------------------------------- |
| Framework            | Next.js 16.3.3                       | App Router y renderizado de la aplicación    |
| Lenguaje             | TypeScript                           | Código tipado y mantenible                   |
| Estilos              | Tailwind CSS 4                       | Diseño responsivo y modular                  |
| Interacción          | Swiper.js                            | Carrusel de servicios                        |
| Animación            | Framer Motion y React Type Animation | Transiciones y texto animado                 |
| Contadores           | React CountUp                        | Estadísticas animadas                        |
| Partículas           | tsParticles                          | Fondo interactivo                            |
| Runtime              | Bun                                  | Instalación de dependencias y servidor local |
| Control de versiones | Git y LazyGit                        | Gestión de ramas y commits                   |

El proyecto fue desarrollado con **LazyVim (Neovim)**, configurado para trabajar directamente desde la terminal y mantener un entorno ligero.

## Aprendizajes

Mi camino en la programación comenzó de forma autodidacta. Durante el desarrollo de este proyecto aprendí a:

1. **Pensar en componentes:** separar la lógica visual de los datos, centralizados en `data.tsx`.
2. **Dominar el layout:** construir interfaces con `Grid` y `Flexbox` que se adaptan desde móviles hasta monitores de escritorio.
3. **Escribir código tipado:** utilizar interfaces estrictas de TypeScript para detectar errores antes de compilar.

## Soluciones a problemas frecuentes

### Rutas 404 y error «Expression Expected» en Next.js

- **Problema:** el enrutamiento fallaba al crear las primeras páginas.
- **Causa:** se usaban exportaciones nombradas, como `export const Page`, y extensiones `.ts`.
- **Solución:** en el App Router, cada ruta debe incluir un archivo `page.tsx` con una exportación por defecto (`export default`). Los componentes reutilizables, como `Header`, sí pueden usar exportaciones nombradas.

### Error `void` al renderizar con `.map()`

- **Problema:** TypeScript mostraba _«Type 'void' is not assignable to type 'ReactNode'»_.
- **Causa:** las funciones flecha con llaves (`=> { ... }`) no tenían un `return` explícito.
- **Solución:** utilizar retorno implícito con paréntesis (`=> ( ... )`) o añadir `return` dentro del bloque.

### Caché después de renombrar rutas

- **Problema:** la navegación y algunas imágenes dejaron de cargar después de renombrar carpetas.
- **Causa:** el compilador de Next.js conservaba referencias a las rutas anteriores en su caché.
- **Solución:** eliminar la carpeta `.next` y reiniciar el servidor:

  ```bash
  rm -rf .next
  bun run dev
  ```

## Ejecución local

### Requisitos

- [Bun](https://bun.sh/)
- Git

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/landing-particles.git
   cd landing-particles
   ```

2. Instala las dependencias:

   ```bash
   bun install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   bun run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

| Comando         | Descripción                        |
| --------------- | ---------------------------------- |
| `bun run dev`   | Inicia el servidor de desarrollo   |
| `bun run build` | Genera la versión de producción    |
| `bun run start` | Inicia la aplicación en producción |
| `bun run lint`  | Ejecuta ESLint                     |

Este README documenta un proceso de desarrollo real y transparente, desde el aprendizaje inicial hasta la resolución de problemas de arquitectura y herramientas.

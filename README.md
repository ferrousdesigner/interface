# Monorepo Overview

This is a monorepo containing some apps and libraries.

## Current Apps

1. **Interface website for documentation of Interface UI library** (Foldername: `apps/interface`)
2. **Interface website e2e testing** (Foldername: `apps/interface-e2e`)
3. **Societi App** (Foldername: `apps/societi`)

## Current Libraries

1. **Interface UI library** (Foldername: `ui`)

## Procedure to Develop

1. **Install packages** using `npm i` and Nx Console in VS Code.

2. **To generate a new component:**
   ```sh
   nx g @nx/next:component ui/src/lib/componentName/componentName
   ```

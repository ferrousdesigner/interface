# Interface Monorepo Guide

This monorepo contains multiple apps and libraries for the Interface project.

## Project Structure

### Apps

1. **Interface Website**

   - Purpose: Documentation for Interface UI library
   - Folder: `apps/interface`

2. **Interface Website E2E Testing**

   - Purpose: End-to-end testing for Interface website
   - Folder: `apps/interface-e2e`

3. **Societi App**
   - Purpose: Main Societi application
   - Folder: `apps/societi`

### Libraries

1. **Interface UI Library**
   - Purpose: Reusable UI components
   - Folder: `ui`

## Development Guide

### Setup

1. Install packages:
   ```bash
   npm i
   ```
   Also, ensure you have the NX Console extension installed in VS Code.

### Creating New Components

1. Generate a new component using NX:

   ```bash
   nx g @nx/next:component ui/src/lib/componentName/componentName
   ```

   - Select `styled-component` when prompted
   - Choose the first option for the subsequent prompt

2. Create an `index.ts` file in `ui/src/lib/componentName/componentName`:

   ```typescript
   export * from './componentName';
   ```

3. Update `ui/src/lib/index.ts` to export the new component:
   ```typescript
   export * from './componentName/componentName';
   ```

### Using Components

You can now use your new component in any app by importing from `@interface/ui`:

```typescript
import { ComponentName } from '@interface/ui';
```

### Running the Development Server

To start the development server for the Interface website:

```bash
nx run interface:dev
```

## Best Practices

- Keep components modular and reusable
- Maintain consistent naming conventions across the monorepo
- Regularly update documentation as new components are added
- Use NX's powerful tooling for managing dependencies and builds

## Troubleshooting

If you encounter any issues:

- Ensure all dependencies are correctly installed
- Check for any conflicting package versions
- Verify that paths and exports are correctly set up

For more detailed information, refer to the NX documentation and the README files in individual project folders.

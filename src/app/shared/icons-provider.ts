import { inject, provideEnvironmentInitializer } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

export type IconFontSetClass =
  | 'material-symbols-outlined'
  | 'material-symbols-rounded'
  | 'material-symbols-sharp';

export const provideIcons = (fontSetClass: IconFontSetClass) =>
  provideEnvironmentInitializer(() => {
    const matIconRegistry = inject(MatIconRegistry);

    const defaultFontSetClass = matIconRegistry.getDefaultFontSetClass();

    const customFontSetClass = defaultFontSetClass
      .filter((fontSetClass) => fontSetClass !== 'material-icons') // Remove default...
      .concat([fontSetClass]); // ...and add custom

    matIconRegistry.setDefaultFontSetClass(...customFontSetClass);
  });

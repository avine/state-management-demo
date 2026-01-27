import {
  DestroyRef,
  effect,
  inject,
  Injectable,
  Injector,
  isSignal,
  Signal,
  signal,
} from '@angular/core';
import { LAYOUT_DEFAULT_CONFIG } from './layout-constants';
import { LayoutConfig } from './layout-types';

@Injectable({
  providedIn: 'root',
})
export class LayoutConfigService {
  private readonly _config = signal<LayoutConfig>(LAYOUT_DEFAULT_CONFIG);

  readonly config = this._config.asReadonly();

  register(
    partialConfig: Partial<LayoutConfig> | Signal<Partial<LayoutConfig>>,
    injector?: Injector,
  ) {
    const configKeys = new Set<keyof LayoutConfig>();

    effect(
      () => {
        const _partialConfig = isSignal(partialConfig) ? partialConfig() : partialConfig;

        this._config.update((config) => ({ ...config, ..._partialConfig }));

        Object.keys(_partialConfig).forEach((key) => configKeys.add(key as keyof LayoutConfig));
      },
      { injector },
    );

    const destroyRef = injector?.get(DestroyRef) ?? inject(DestroyRef);
    destroyRef.onDestroy(() => this.reset(...configKeys));
  }

  private reset(...configKeys: (keyof LayoutConfig)[]) {
    this._config.update((config) => ({
      ...config,
      ...Object.fromEntries(configKeys.map((key) => [key, LAYOUT_DEFAULT_CONFIG[key]])),
    }));
  }
}

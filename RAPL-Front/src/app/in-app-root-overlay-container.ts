import { Inject, Injectable, OnDestroy, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';

export const OVERLAY_PARENT_HTML = new InjectionToken<string>('OVERLAY_PARENT_HTML');

@Injectable({ providedIn: 'root' })
export class InAppRootOverlayContainer extends OverlayContainer implements OnDestroy {
  constructor(@Inject(DOCUMENT) _document: any) {
    super(_document);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  getRootElement(): Element {
    return this._document.querySelector('app-root');
  }

  protected _createContainer(): void {
    super._createContainer();
    this._appendToRootComponent();
  }

  private _appendToRootComponent(): void {
    if (!this._containerElement) {
      return;
    }

    const rootElement = this.getRootElement();
    const parent = rootElement || this._document.body;
    parent.appendChild(this._containerElement);
  }
}
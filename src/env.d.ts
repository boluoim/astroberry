/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ViewTransition {
    ready: Promise<void>
    finished: Promise<void>
    updateCallbackDone: Promise<void>
    skipTransition(): void
}

interface Document {
    startViewTransition?(callback: () => void | Promise<void>): ViewTransition
}

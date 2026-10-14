/**
 * App-wide "unsaved changes" flag. The editor sets it; app navigation (top bar, bottom nav)
 * asks before leaving a page with unsaved work.
 */
let unsaved = false

export function setUnsavedChanges(value: boolean) {
  unsaved = value
}

/** Returns true if navigation may proceed. */
export function confirmLeave(): boolean {
  if (!unsaved) return true
  const ok = confirm('You have unsaved changes. Leave this page and discard them?')
  if (ok) unsaved = false
  return ok
}

export interface Preferences {
  hidePatrimony: boolean;
}

export const getEmptyPreferences = (): Preferences => ({
  hidePatrimony: false,
});

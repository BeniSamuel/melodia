export type PlayListCard = {
  createPlaylist: boolean;
  setCreatePlaylist: (value: boolean) => void; // Fix return type to void
  initializeForm?: boolean; // Make optional if not used
  setInitializeForm?: (value: boolean) => void; // Make optional if not used
};
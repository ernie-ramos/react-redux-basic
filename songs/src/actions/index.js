// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    // a 'type' is required by Redux
    type: 'SONG_SELECTED',
    // payload is optional
    payload: song,
  };
};

export const authInitialState = {
  token: null,
};

export const authReducerCases = {
  SET_TOKEN: 'SET_TOKEN',
  SET_USER: 'SET_USER',
  SET_PLAYLISTS: 'SET_PLAYLISTS',
  SET_PLAYING: 'SET_PLAYING',
  SET_PLAYER_STATE: 'SET_PLAYER_STATE',
  SET_PLAYLIST: 'SET_PLAYLIST',
  SET_PLAYLIST_ID: 'SET_PLAYLIST_ID',
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case authReducerCases.SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};

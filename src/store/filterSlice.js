import { createSlice } from "@reduxjs/toolkit";

// Define the initial state with the filter categories and available options
const initialState = {
  themes: {
    "N/A": false,
    classic: false,
    Ambig: false,
    party: false,
  },
  sleeveTypes: {
    "N/A": false,
    Ambig: false,
    sleeveless: false,
    long: false,
  },
  materialCompositions: {
    "N/A": false,
    beaded: false,
    Ambig: false,
    lace: false,
    "a line": false,
    chiffon: false,
    cape: false,
    mesh: false,
    off: false,
  },
  embellishments: {
    "N/A": false,
    Ambig: false,
    white: false,
    "evening gown": false,
    evening: false,
  },
  neckline: {
    "spaghetti strap": false,
    "N/A": false,
    high: false,
    Ambig: false,
    "one shoulder": false,
    "off the shoulder": false,
    "v neck": false,
    off: false,
    halter: false,
  },
  backDetails: {
    "N/A": false,
    Ambig: false,
    lace: false,
    backless: false,
    v: false,
    sequin: false,
    off: false,
    halter: false,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setThemes: (state, action) => {
      state.themes = { ...state.themes, ...action.payload }; // Update selected theme(s)
    },
    setSleeveTypes: (state, action) => {
      state.sleeveTypes = { ...state.sleeveTypes, ...action.payload }; // Update selected sleeve type(s)
    },
    setMaterialCompositions: (state, action) => {
      state.materialCompositions = {
        ...state.materialCompositions,
        ...action.payload,
      }; // Update selected material composition(s)
    },
    setEmbellishments: (state, action) => {
      state.embellishments = { ...state.embellishments, ...action.payload }; // Update selected embellishment(s)
    },
    setNeckline: (state, action) => {
      state.neckline = { ...state.neckline, ...action.payload }; // Update selected neckline(s)
    },
    setBackDetails: (state, action) => {
      state.backDetails = { ...state.backDetails, ...action.payload }; // Update selected back detail(s)
    },

    
  },
});

export const {
  setThemes,
  setSleeveTypes,
  setMaterialCompositions,
  setEmbellishments,
  setNeckline,
  setBackDetails,
 
} = filterSlice.actions;

export default filterSlice.reducer;

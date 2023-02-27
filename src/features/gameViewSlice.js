import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const randomIntInRange = (min, max) => {
  return Math.floor(Math.random()*(max-min)) + min
}

const initialState = {
  selectedCategories: "",
  options: [],
  optionsPlaying: [],
  speed: 0.9,
  score: 0,
  health: 100,
  animatingOut: false,
  gameTime: 0,
  intSpeed: 50,
};

const data = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  numbers: "0123456789".split(""),
  symbols: "<>;'\"[]{}+=()&%$#@!_-*:.,`?".split(""),
};

const gameViewSlice = createSlice({
  name: "gameView",
  initialState,
  reducers: {
    updateOptions: (state, actions) => {
      const charType = actions.payload;
      charType.forEach((type) => {
        if (data[type]) {
          state.options.push(data[type]);
          state.options = state.options.concat.apply([], state.options)
        }
      });
    },
    addNewItem: (state, action) => {
      if(state.options.length > 0){
        const index = randomIntInRange(0, state.options.length)
        let item = {
          character: state.options[index],
          xPosition: randomIntInRange(5,95),
          yPosition: -20,
          active: true,
          hitHealth: false,
          remove: false,
          deathTimer: 0
        }
        state.optionsPlaying.push(item)
        state.optionsPlaying = state.optionsPlaying.filter((el)=> el[index] !== item)
      }

    },
    updatePositions: (state, action) => {
      let options = []
      state.optionsPlaying.forEach((val)=> {
        if(val.active){
          val.yPosition += state.speed
        }
        if(val.yPosition > 70 && val.active){
          val.active = false
          val.deathTimer = 0
          val.hitHealth = true
          state.health = state.health -= 10
        }
        if(!val.active){
          val.deathTimer++
          // console.log(val.deathTimer)
        }
        if(val.deathTimer > 20){
          // console.log('death')
          val.remove = true
        }
        if(val.remove){
          options.push(val.character)
        } else {
          options.push(val)
        }
        state.gameTime += state.intSpeed
        state.optionsPlaying = options
      })
    },
    setAnimationOut: (state, action) => {
      state.animatingOut = action.payload
    },
    handleUserInput: (state, action) => {
      let val = action.payload

      state.optionsPlaying.forEach((el, index)=> {
        if(val === el.character && el.active){
          state.optionsPlaying[index].active = false
          state.optionsPlaying[index].deathTimer = 0
          state.score = state.score + 1 || 0
        }
      })
    }
},
});


export const {handleUserInput, addNewItem, updateOptions, updatePositions, setAnimationOut} = gameViewSlice.actions

export default gameViewSlice.reducer;

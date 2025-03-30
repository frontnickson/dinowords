import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { words } from "../constants/words";

interface LevelState {
    easy: boolean;
    middle: boolean;
    hight: boolean;
}
interface WordState {
    id: number;
    word: string;
    translate: string;
    know: boolean;
}

interface UserState {
    email: null;
    token: null;
    id: null;
    studiedWords: WordState[];
    words: WordState[];
    level: LevelState;
    stressTime: number;
    translate: boolean
}

const initialState: UserState = {
    email: null,
    token: null,
    id: null,
    studiedWords: [],
    words: words,
    level: {
        easy: false,
        middle: false,
        hight: false
    },
    stressTime: 0,
    translate: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.token = null;
        },
        setLevel(state, action: PayloadAction<string>) {
            if (action.payload === "easy") {
                state.level.easy = true
                state.level.middle = false
                state.level.hight = false
            } else if (action.payload === "middle") {
                state.level.easy = false
                state.level.middle = true
                state.level.hight = false
            } else if (action.payload === "hight") {
                state.level.easy = false
                state.level.middle = false
                state.level.hight = true
            } else if (action.payload === "easy-disabled") {
                state.level.easy = false
            } else if (action.payload === "middle-disabled") {
                state.level.middle = false
            } else if (action.payload === "hight-disabled") {
                state.level.hight = false
            }
        },
        setTranslate(state, action: PayloadAction<boolean>) {
            if (action.payload === true) {
                state.translate = true
            } else if (action.payload === false) {
                state.translate = false
            }
        },
        pushNewWord(state, action: PayloadAction<WordState>) {
            if (!state.studiedWords.some(item => item.word === action.payload.word)) {
                state.studiedWords.push(action.payload);
            }

            state.words = state.words.map(item => {
                if (item.word === action.payload.word) {
                    item.know = true;
                }
                return item;
            });
        }
    },
})

export const { setUser, setLevel, setTranslate, pushNewWord } = userSlice.actions;
export default userSlice.reducer;



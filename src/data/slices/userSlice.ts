import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
    email: string;
    token: string;
    id: number;
    name: string;
    image: string;
    studiedWords: WordState[];
    level: LevelState;
    stressTime: number;
    translate: boolean
}

const initialState: UserState = {
    email: "",
    token: "",
    id: 0,
    name: "",
    image: "",
    studiedWords: [],
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
        // add new user
        setUser(state, action: PayloadAction<UserState>) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
            state.name = action.payload.name
        },
        // exit profile
        removeUser(state) {
            state.email = "";
            state.id = 0;
            state.token = "";
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

            state.studiedWords = state.studiedWords.map(item => {
                if (item.word === action.payload.word) {
                    item.know = true;
                }
                return item;
            });
        },
        setImage(state, action: PayloadAction<string>) {
            state.image = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        }
    },
})

export const { setUser, removeUser, setLevel, setTranslate, pushNewWord, setImage, setToken } = userSlice.actions;
export default userSlice.reducer;



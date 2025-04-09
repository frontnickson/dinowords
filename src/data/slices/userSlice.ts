import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface LevelState {
    easy: boolean;
    middle: boolean;
    hight: boolean;
}

export interface WordState {
    id: number;
    word: string;
    translate: string;
    know: boolean;
    imageLink: string;
}

interface UserState {
    email: string;
    token: string;
    id: number;
    name: string;
    age: number;
    man: boolean;
    woman: boolean;
    image: string;
    studiedWords: WordState[];
    studiedImage: WordState[];
    level: LevelState;
    stressTime: number;
    translate: boolean
}

const initialState: UserState = {
    email: "",
    token: "",
    id: 0,
    name: "",
    age: 0,
    man: false,
    woman: false,
    image: "",
    studiedWords: [],
    studiedImage: [],
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
            state.id = action.payload.id + 1
            state.name = action.payload.name
            state.image = action.payload.image
            state.studiedWords = action.payload.studiedWords
            state.level = {easy: false, middle: false, hight: false}
            state.stressTime = 0
            state.translate = false
        },
        // exit profile
        removeUser(state) {
            state.email = "";
            state.token = "";
            state.id = 0;
            state.name = "";
            state.image = "";
            state.studiedWords = [];
            state.age = 0;
            state.man = false;
            state.woman = false;
        },
        setAge(state, action: PayloadAction<number>) {
            state.age = action.payload;
        },
        setMan(state, action: PayloadAction<boolean>) {
            if (!state.woman) {
                state.man = action.payload
            }
        },
        setWoman(state, action: PayloadAction<boolean>) {
            if(!state.man) {
                state.woman = action.payload;
            }
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
            const existingWords = state.studiedWords.find(item => item.word === action.payload.word)
            if (!existingWords) {
                state.studiedWords.push(action.payload)
            }
        },
        pushNewImage(state, action: PayloadAction<WordState>) {
            const existingWords = state.studiedImage.find(item => item.word === action.payload.word)
            if (!existingWords) {
                state.studiedImage.push(action.payload)
            }
        },
        setImage(state, action: PayloadAction<string>) {
            state.image = action.payload;
        },
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload;
        }
    },
})

export const {
    setUser,
    removeUser,
    setLevel,
    setTranslate,
    pushNewWord,
    setImage,
    setToken,
    pushNewImage,
    setAge,
    setMan,
    setWoman,
} = userSlice.actions;
export default userSlice.reducer;



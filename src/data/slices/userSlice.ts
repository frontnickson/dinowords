import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface WrodsState {
    id: string;
    word: string;
    translate: string
}

interface UserState {
    email: null;
    token: null;
    id: null;
    words: WrodsState[]
}

const initialState: UserState = {
    email: null,
    token: null,
    id: null,
    words: []
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
        }
    },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;



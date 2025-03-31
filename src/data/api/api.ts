import axios from "axios";

export async function fetchUser() {
    try {
        const res = await axios.get("http://localhost:5001/user");
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchWords() {
    try {
        const res = await axios.get("http://localhost:5001/words");
        return res;
    } catch (error) {
        console.log(error);
    }
}

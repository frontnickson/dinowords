const key = import.meta.env.VITE_API_KEY;

export const analyzeText = `https://api.textgears.com/analyze?key=${key}&text=`;

export const suggestText = `https://api.textgears.com/suggest?key=${key}&text=`

export const correctText = `https://api.textgears.com/correct?text=`
export const correctKey = `%3F&language=en-GB&key=${key}`

export const detectText = `https://api.textgears.com/detect?key=${key}&text=`
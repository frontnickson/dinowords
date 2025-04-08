import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/store/store';
import { pushNewWord, WordState } from '../../../data/slices/userSlice';

import styles from './GetRandomWords.module.scss';

interface GetRandomWordsProps {
    randomWords: WordState[];
    text: string;
}

const GetRandomWords: React.FC<GetRandomWordsProps> = ({ randomWords, text }) => {
    
    const dispatch = useDispatch();
    const [localWords, setLocalWords] = useState(randomWords);
    const checkTranslate = useSelector((state: RootState) => state.user.translate);
    const localText = useMemo(() => text.trim().split(' '), [text]);

    useEffect(() => {
        setLocalWords(randomWords);
    }, [randomWords]);

    useEffect(() => {
        const handlePushNewWords = () => {

            setLocalWords((prev) => {
                return prev.map((item) => {
                    if (localText.includes(item.word)) {
                        dispatch(pushNewWord(item));
                        return { ...item, know: true };
                    }
                    return item;
                });
            });
        };

        handlePushNewWords();
    }, [localText, dispatch]);

    return (
        <div className={styles.content}>
            {localWords &&
                localWords.map((item) => (
                    <ul key={item.id} className={styles.content_words}>
                        <li className={item.know ? styles.content_active : styles.content_disabled}>
                            <h4>{item.word}</h4>
                            {checkTranslate && <p>{item.translate}</p>}
                        </li>
                    </ul>
                ))}
        </div>
    );
};

export default GetRandomWords;

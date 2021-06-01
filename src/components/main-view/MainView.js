import React, { useState } from 'react';
import WelcomePage from '../welcome-page/WelcomePage';
import {IDS, PASSCODE_PAGE, NICKNAME_PAGE} from '../../utils/pages';
import Chat from '../chat/Chat';
import {v4} from 'uuid';

function MainView(){
    const [page, setPage] = useState('');
    const [passcode, setPasscode] = useState('');
    const [nickname, setNickname] = useState('');
    const [userId, setUserId] = useState('');

    let Filter = require("bad-words");
    let filter = new Filter();

    let checkPasscode = () => {
        return passcode === 'pass'
    }

    let passcodeOnClick = () => {
        if(!checkPasscode())
            return;
        setPasscode('');
        setPage(IDS.nickname);
    }

    let checkNickname = () => {

        let valid = nickname.length > 0 && !filter.isProfane(nickname);
        return valid;
    }

    let nicknameOnClick = () =>{
        if(!checkNickname())
            return;
        setPage(IDS.chat);
    }

    let addUser = (text) => {
        setUserId(v4());
        setNickname(text);
    } 

    let renderComponents = () => { 

        switch(page){
            case IDS.nickname:
                return <WelcomePage
                    title={NICKNAME_PAGE.title}
                    label={NICKNAME_PAGE.label}
                    type={NICKNAME_PAGE.type}
                    placeholder={NICKNAME_PAGE.placeholder}
                    text={nickname}
                    setText={addUser}
                    onBtnClick={nicknameOnClick}
                />

            case IDS.chat:
                return <Chat 
                    nickname={nickname}
                    currentUserId={userId}
                    />

            default:
                return <WelcomePage
                    title={PASSCODE_PAGE.title}
                    label={PASSCODE_PAGE.label}
                    type={PASSCODE_PAGE.type}
                    placeholder={PASSCODE_PAGE.placeholder}
                    text={passcode}
                    setText={setPasscode}
                    onBtnClick={passcodeOnClick}
                />
        }
    }
    return renderComponents();
}

export default MainView;
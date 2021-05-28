import React, { useState } from 'react';
import WelcomePage from '../welcome-page/WelcomePage';
import {IDS, PASSCODE_PAGE, NICKNAME_PAGE} from '../../utils/pages';
import Chat from '../chat/Chat';

function MainView(){
    const [page, setPage] = useState('');
    const [passcode, setPasscode] = useState('');
    const [nickname, setNickname] = useState('');

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
        return nickname.length > 0;
    }

    let nicknameOnClick = () =>{
        if(!checkNickname())
            return;
        setPage(IDS.chat);
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
                    setText={setNickname}
                    onBtnClick={nicknameOnClick}
                />

            case IDS.chat:
                return <Chat />

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
import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonAccent from './ButtonAccent';
import ButtonNomal from './ButtonNomal';

const Wrapper = styled.div`
    .card-input {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 16px;

        position: relative;
        width: 308px;
        height: 108px;

        /* White */

        background: #ffffff;
        /* nomal */
        border: 1px solid red;

        box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
        border-radius: 6px;

        margin-top: 20px;
        margin-left: 20px;
    }
    .card-input__text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;

        position: absolute;
        width: 252px;
        height: 76px;
        left: 16px;
        top: 16px;

        border-radius: 8px;

        /* Inside Auto Layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 0px;
    }
    .card-input__text--title {
        position: absolute;
        width: 252px;
        height: 23px;
        left: 0px;
        top: 0px;

        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 23px;

        border: none;

        /* Black */

        color: #010101;

        /* Inside Auto Layout */

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 8px 0px;
    }
    .card-input__text--body {
        position: absolute;
        width: 252px;
        height: 20px;
        left: 0px;
        top: 31px;

        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;

        border: none;

        /* Black */

        color: #010101;

        /* Inside Auto Layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 8px 0px;
    }
    .card-input__button {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;

        position: absolute;
        width: 276px;
        height: 40px;
        left: 16px;
        top: 83px;

        /* Inside Auto Layout */

        flex: none;
        order: 1;
        flex-grow: 0;
        margin: 16px 0px;
    }
    .card-input__button--nomal {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px;

        position: absolute;
        width: 134px;
        height: 40px;
        left: 0px;
        top: 0px;

        /* Gray 5 */

        background: #e0e0e0;
        border-radius: 6px;
    }
    .card-input__button--accent {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px;

        position: absolute;
        width: 134px;
        height: 40px;
        left: 142px;
        top: 0px;

        /* Blue */

        background: #0075de;
        border-radius: 6px;
    }
`;

const CardInput = ({ list, index, clickHandler, isModify, originCard }) => {
    const [title, setTitle] = useState(isModify ? originCard.title : '');
    const [body, setBody] = useState(isModify ? originCard.body : '');
    const [isAble, setAbility] = useState(isModify ? true : false);

    const addCard = () => {
        if (!isAble) return;
        list.splice(index, isModify ? 1 : 0, { title, body, author: 'web' });
        clickHandler();
    };
    const deleteCard = () => clickHandler();
    const changeTitle = ({ target }) => {
        setTitle(() => {
            body.length * target.value.length
                ? setAbility(true)
                : setAbility(false);
            return target.value;
        });
    };
    const changebody = ({ target }) => {
        setBody(() => {
            title.length * target.value.length
                ? setAbility(true)
                : setAbility(false);
            return target.value;
        });
    };
    return (
        <Wrapper>
            <div className="card-input">
                <div className="card-input__text">
                    <input
                        className="card-input__text--title"
                        placeholder="제목을 입력하세요"
                        onChange={changeTitle}
                        value={title}
                    ></input>
                    <input
                        className="card-input__text--body"
                        placeholder="내용을 입력하세요"
                        onChange={changebody}
                        value={body}
                    ></input>
                </div>
                <div className="card-input__button">
                    <ButtonNomal clickHandler={deleteCard} title="취소" />
                    <ButtonAccent
                        clickHandler={addCard}
                        isAble={isAble}
                        title={isModify ? '수정' : '등록'}
                    />
                </div>
            </div>
        </Wrapper>
    );
};

export default CardInput;

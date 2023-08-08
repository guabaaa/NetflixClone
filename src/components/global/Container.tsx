import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNavBar from "../../page/navbar/HeaderNavBar";

const Container = () => {
return (
    <div className='basicLayout'>
        <div className='netflix-sans-font-loaded'>
            <div lang='kor' dir='ltr' data-uia='loc'>
                <HeaderNavBar />
                <Outlet />
            </div>
        </div>
    </div>
)}
export default Container;
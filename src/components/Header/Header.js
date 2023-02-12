import React from 'react';
import {useSelector} from "react-redux";

export const Header = () => {
    const {selectedUser} = useSelector(state => state.users)
    return (
        <div>
           Header: User Name  - {selectedUser && selectedUser.name}
        </div>
    );
};
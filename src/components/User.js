import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../redux/Slice/User';


const User = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    dispatch(update({ name: 'a', age: '21' }))
    return (
        <>
            <div>{user.name}</div>
            <div>{user.age}</div>
        </>

    )
}

export default User
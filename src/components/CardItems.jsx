import React from 'react'
import EditIcon from './EditIcon'
import { Link } from 'react-router-dom'

function CardItems({ email, first_name: name, id, avatar, handleEditModal }) {
    console.log("component rendered")
    return (
        <div className='user-details-card'>
            <h3 className='mb-10'>{name}</h3>
            <h5 className='mb-10'>{email}</h5>
            <div className='image-container icon-wrap'>
                <img src={avatar} />
                <button onClick={() => handleEditModal(id)} >
                    <Link to={`/${id}`}>
                        <EditIcon className="icon-edit icon-size-32" />
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default CardItems
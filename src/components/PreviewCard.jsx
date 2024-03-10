import React from 'react'

function PreviewCard({ first_name: name, email, avatar }) {
    return (
        <div className='preview-card'>
            <h3 className='mb-10'>{name}</h3>
            <h5 className='mb-10'>{email}</h5>
            <div className='preview-image-container'>
                <img src={avatar} />
            </div>
        </div>
    )
}

export default PreviewCard
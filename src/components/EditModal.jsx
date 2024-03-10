import { useEffect, useState } from "react"
import Input from "./Input"
import { Link, useParams } from "react-router-dom"
import CardItems from "./CardItems"
import PreviewCard from "./PreviewCard"
import { UpdateUser } from "../services/UserService"
import CloseIcon from "./CloseIcon"
import { useUserContext } from "../context/UserContext"

function EditModal({ handleEditModal }) {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
    // const [userData, setUserData] = useState(null)
    const { singleUserData, setSingleUserData, updateUser, getSingleUser } = useUserContext()
    let { id } = useParams()


    async function handleSubmit(e) {
        e.preventDefault()
        const { userDetails } = await UpdateUser({ id, userName, email, avatarUrl, contact })
        setSingleUserData(userDetails)
        // console.log(userDetails)
        updateUser(userDetails)
    }


    useEffect(() => {

        getSingleUser(id)

        return () => {
            // console.log("unmounted")
            setSingleUserData(null)
        }
    }, [])


    return (
        <>
            {/* Modal backdrop */}
            <Link to='/' className="backdrop" onClick={handleEditModal}>
            </Link>
            <div className="edit-modal-container">
                {/* Close Icon modal header Section */}
                <div onClick={handleEditModal} className="close-btn d-flex justify-end mb-10">
                    <Link to={`/`}>
                        <CloseIcon />
                    </Link>
                </div>

                {/* modal section */}
                <div className="d-flex gap-100 modal-container-wrapper">
                    {/* left card view */}
                    <div>
                        {!singleUserData && <div>Loading...</div>}
                        {singleUserData && <PreviewCard {...singleUserData} />}
                    </div>
                    {/* right details form component */}
                    <div className="w-100">
                        <h5 className="mb-10 modal-title">Update Information Modal</h5>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Input
                                    LabelName={'Full Name'}
                                    className="w-100 input-wrap"
                                    type='text'
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div>
                                <Input
                                    LabelName={'Email id'}
                                    className="w-100 input-wrap"
                                    type='text'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <Input
                                    LabelName={'Contact Number'}
                                    className="w-100 input-wrap"
                                    type='tel'
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                            </div>
                            <div className="image-upload-container">
                                <Input
                                    type="file"
                                    LabelName="Profile Picture"
                                    onChange={(e) => setAvatarUrl(URL.createObjectURL(e.target.files[0]))}
                                />
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditModal
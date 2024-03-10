import { createContext, useContext, useState } from "react";

const UserContext = createContext()


export function useUserContext() {
    return useContext(UserContext)
}


export function UserContextProvider({ children }) {

    const [allUserData, setAllUserData] = useState(null)
    const [singleUserData, setSingleUserData] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isUploading, setIsUploading] = useState(false)


    function updateUser({ id, avatar, first_name, email, contact }) {
        const updatedUserData = allUserData.map((user) => {
            return user.id == id ? { ...user, id, avatar, first_name, email, contact } : user
        })
        setAllUserData(updatedUserData)
    }

    function getSingleUser(id) {
        const user = allUserData.find((user) => user.id == id ? user : "")
        setSingleUserData(user)
    }

    return (
        <UserContext.Provider value={{
            allUserData,
            setAllUserData,
            singleUserData,
            setSingleUserData,
            updateUser,
            getSingleUser,
            isModalVisible,
            setIsModalVisible,
            isUploading,
            setIsUploading
        }}>
            {children}
        </UserContext.Provider>
    )
}
import { useEffect, useState } from 'react'
import './App.css'
import CardItems from './components/CardItems'
import EditModal from './components/EditModal'
import { getAllUser } from './services/UserService'
import { useUserContext } from './context/UserContext'

function App() {

  // const [usersData, setUsersData] = useState(null)
  const { allUserData, setAllUserData } = useUserContext()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleEditModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  useEffect(() => {
    async function getUsersList() {
      try {
        const { AllUsersDetails } = await getAllUser()
        setAllUserData(AllUsersDetails.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsersList()
    // console.log("component rendered")
  }, [])

  return (
    <div className='main-container'>
      {!allUserData && <div>Loading...</div>}
      {allUserData && allUserData.map((user) => (
        <CardItems
          key={user.id}
          {...user}
          handleEditModal={handleEditModal}
        />
      ))}

      {isModalVisible && <EditModal handleEditModal={handleEditModal} />}
    </div>
  )
}

export default App

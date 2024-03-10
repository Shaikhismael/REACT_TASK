// Updating Users details
export async function UpdateUser({ id, userName, email, avatarUrl, contact }) {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                first_name: userName,
                email: email,
                avatar: avatarUrl,
                contact,
                id,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const userDetails = await response.json()
        return { userDetails }
    } catch (error) {
        console.log(error)
        return error
    }
}

// getting all available users
export async function getAllUser() {
    try {
        const response = await fetch(`https://reqres.in/api/users/`)
        const AllUsersDetails = await response.json()
        return { AllUsersDetails }
    } catch (error) {
        console.log(error)
        return error
    }
}

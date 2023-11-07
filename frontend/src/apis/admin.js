import axios from "../axios"


const adminPath = '/admin/access'

// export const signIn = (data) => new Promise(async (resolve, reject) => {
//     try {
//         const response = await axios({
//             url: `${adminPath}/login`,
//             method: 'POST',
//             data: data
//         })
//         resolve(response)
//     } catch (error) {
//         reject(error)
//     }
// })

export const signIn = async (data) => {
    try {
        const response = await axios({
            url: `${adminPath}/login`,
            method: 'post',
            data
        })
        return response
    } catch (error) {
        return (error.response)
    }
}

export const creatNewPost = async (data) => {
    try {
        const response = await axios({
            url: `${adminPath}/createNewPost`,
            method: 'post',
            data
        })
        return response
    } catch (error) {
        return (error.response)
    }
}





export const addPost = async (data) => {
    try {
        const response = await axios({
            url: `${adminPath}/addPost`,
            method: 'post',
            data
        })
        return response
    } catch (error) {
        return (error.response)
    }
}

export const addPicture = async (formData) => {
    try {
        // console.log(formData)
        const response = await axios({
            url: `${adminPath}/addPicture`,
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            method: 'post',
            data: formData
        })
        return response
    } catch (error) {
        return (error.response)
    }
}

export const addDraftPicture = async (formData) => {
    try {
        // console.log(formData)
        const response = await axios({
            url: `${adminPath}/addDraftPicture`,
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            method: 'post',
            data: formData
        })
        return response
    } catch (error) {
        return (error.response)
    }
}
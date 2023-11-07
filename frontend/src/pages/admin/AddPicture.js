import { useState } from 'react'
import { addPicture } from '../../apis/admin'

const AddPicture = ({titleName, counter}) => {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('picturePro', image.data)
        const response = await addPicture(formData)
        // console.log(response)

        // if (response) setStatus(response.statusText)
    }

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }

    return (
        <div className='flex flex-col mt-10 text-center'>
            <h1 className='font-bold'>{titleName}</h1>
            <hr></hr>

            <div>
                <input className='mt-10' type='file' name='file' onChange={handleFileChange}></input>
                <button className='border border-solid rounded-lg p-1 pr-4 pl-4' type='submit' onClick={handleSubmit}>Submit</button>
            </div>
            <div className='flex mt-10 justify-center text-center'>
                {image.preview && <img src={image.preview} width='200' height='200' alt='' />}
            </div>
            {status && <h4>{status}</h4>}
            <div>
                <img src={`${process.env.REACT_APP_SERVER_URL}/img/1695739037518_uthien.jpg`} alt="" />
            </div>
        </div>
    )
}

export default AddPicture
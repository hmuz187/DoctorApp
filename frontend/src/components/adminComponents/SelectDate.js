import { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"




const SelectDate = (props) => {

    const options = {
        title: "Change created date",
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        maxDate: new Date("2050-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-white dark:bg-gray-800",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>{`<`}</span>,
            next: () => <span>{`>`}</span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: new Date(props.postCreatedAt),
        language: "en",
    }
    

    const [show, setShow] = useState(false)
    const handleChange = (selectedDate) => {
        console.log(selectedDate)
    }
    const handleClose = (state) => {
        setShow(state)
    }

    return (
        <>
            <div className='flex flex-row text-center mt-5'>
                <div className='my-auto '>
                    <p className='px-4'>Created date: </p>
                </div>
                <div>
                    <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
                </div>
            </div>
        </>
    )
}

export default SelectDate







/*
<div className="relative max-w-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input datepicker datepicker-autohide type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
</div>
*/
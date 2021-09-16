import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const Form = () => {
    const [nameInput, setNameInput] = useState()
    const [emailInput, setEmailInput] = useState()
    const [subjectInput, setSubjectInput] = useState()
    const [textInput, setTextInput] = useState()
    const [validate, setValidate] = useState(false)
    const [succes, setSucces] = useState(false)
    const handlerSubmit = async (e) => {
        e.preventDefault()
        if (subjectInput.length < 60) {
            console.log('Emial send')
            setTextInput('')
            setNameInput('')
            setSubjectInput('')
            setEmailInput('')
            setValidate(false)
            setSucces(true)
        } else {
            setValidate(true)
        }
    }

    return (
        <div className="flex flex-col md:flex-row">
            <form
                onSubmit={(e) => handlerSubmit(e)}
                className="flex flex-col space-y-3 text-white md:w-[400px] lg:w-3/5"
            >
                <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    required
                    placeholder="Name (Required)"
                    className="bg-[#454545] h-12 px-4 outline-none"
                />
                <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    required
                    placeholder="Email (Required)"
                    className="bg-[#454545] h-12 px-4 outline-none"
                />
                <input
                    type="text"
                    value={subjectInput}
                    onChange={(e) => setSubjectInput(e.target.value)}
                    required
                    placeholder="Subject (Required)"
                    className="bg-[#454545] h-12 px-4 outline-none"
                />
                <textarea
                    className="h-64 bg-[#454545] outline-none px-4 py-4 resize-none"
                    value={textInput}
                    required
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Write your message here... (Required)"
                ></textarea>
                <div className="flex flex-col md:flex-row justify-end space-x-20 items-center">
                    {validate && (
                        <h2 className="text-xl text-red-500">
                            The subject must be less than 60 characters!
                        </h2>
                    )}
                    {succes && (
                        <h2 className="text-primary text-xl">
                            Email has been sent, we will contact you as soon as
                            possible. Thank you!
                        </h2>
                    )}
                    <button className="float-right bg-primary px-12 py-4 shadow-md hover:scale-105 active:scale-95 duration-100">
                        <span>SEND</span>
                    </button>
                </div>
            </form>
            <div className="md:w-1/2 lg:w-1/4 text-white ml-8 mt-12 md:-mt-2 space-y-12 md:space-y-24">
                <p className="leading-loose tracking-wider">
                    <strong>Lorem ipsum:</strong> dolor sit amet consectetur
                    adipisicing elit. Quo laboriosam fugiat sed, minima dolorum
                    dolorem magnam fugit dolor id quos odio voluptate blanditiis
                    quibusdam fuga beatae quisquam? Fugiat, laborum aut.
                </p>
                <div className="space-y-2">
                    <div className="flex items-center space-x-4">
                        <LocationMarkerIcon className="h-6 text-primary" />
                        <h4 className="font-semibold">
                            Elm St. 14/05 Lost City
                        </h4>
                    </div>
                    <div className="flex items-center space-x-4">
                        <PhoneIcon className="h-6 text-primary" />
                        <h4 className="font-semibold">+ 3528 331 86 35</h4>
                    </div>
                    <div className="flex items-center space-x-4">
                        <MailIcon className="h-6 text-primary" />
                        <h4 className="font-semibold">info@hexalcorp.com</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form

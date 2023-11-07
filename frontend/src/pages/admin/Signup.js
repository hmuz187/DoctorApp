import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { signIn } from '../../apis/admin'

const Signup = () => {
    const [isVerifyCodeLoading, setIsVerifyCodeLoading] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verifyCode, setVerifyCode] = useState('')

    const user = useSelector(state => state.admin)
    console.log(user.email)

    const checkVerifyCodeSignUp = async () => {
        const data = await signIn({email, password, verifyCode})
        console.log(data)
    }


    return (
        <>
                {
                    !isVerifyCodeLoading ? <>
                        <section className="py-26 bg-white">
                            <div className="container px-4 mx-auto">
                                <div className="max-w-lg mx-auto py-8">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign up</h2>
                                    </div>
                                    <>
                                        <div className="mb-6">
                                            <label className="block mb-2 font-extrabold">Name</label>
                                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="text" placeholder="your name" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block mb-2 font-extrabold">Email</label>
                                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="your email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block mb-2 font-extrabold">Password</label>
                                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>

                                        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F1B4A] hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200" onClick={() => { setIsVerifyCodeLoading(!isVerifyCodeLoading) }}>Submit</button>
                                        <p className="text-center font-extrabold">Do you have an account? <a className="text-red-500 hover:underline" href="/admin/login">Log in</a></p>
                                    </>
                                </div>
                            </div>
                        </section>
                    </> : <>
                        <section className="py-26 bg-white">
                            <div className="container px-4 mx-auto">
                                <div className="max-w-lg mx-auto py-8">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Verify step</h2>
                                    </div>
                                    <>
                                        <div className="mb-6">
                                            <label className="block mb-2 font-extrabold">Check email and input verify code!</label>
                                            <input className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="text" value={verifyCode} onChange={(e) => setVerifyCode(e.target.value)} />
                                        </div>

                                        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F1B4A] hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200" onClick={checkVerifyCodeSignUp}>Submit</button>

                                        <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-[#1F1B4A] hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200" onClick={() => { setIsVerifyCodeLoading(!isVerifyCodeLoading) }}>Back</button>
                                    </>
                                </div>
                            </div>
                        </section>
                    </>
                }
        </>

    )
}

export default Signup
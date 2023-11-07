import { useEffect, useRef } from 'react'

import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


import { creatNewPost } from '../../apis/admin'
import { useNavigate } from 'react-router-dom';
import SelectDate from '../../components/adminComponents/SelectDate'



const editConfig = {
    toolbar: {
        items: [
            'undo', 'redo',
            '|', 'heading',
            '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
            '|', 'bold', 'italic', 'underline', 'highlight', '|', 'subscript', 'superscript',
            '|', 'alignment', 'outdent', 'indent', 'insertTable',
            '-', // break point
            '|',
            '|', 'link', 'mediaEmbed', 'blockQuote', 'code', 'codeBlock',
            '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
            '|', 'findAndReplace',
        ],
        shouldNotGroupWhenFull: true
    },
    image: {
        toolbar: [
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage'
        ]
    },
    link: {
        decorators: {
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            },
            openInNewTab: {
                mode: 'manual',
                label: 'Open in a new tab',
                defaultValue: true,
                attributes: {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            }
        }
    },
    removePlugins: ["MediaEmbedToolbar", 'title'],
    title: {
        placeholder: 'Type your abstract',
    },
    placeholder: 'Type your content',
}


const AddPostCKEditor = () => {

    const navigate = useNavigate()

    const [isPreview, setIsPreview] = useState(false)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState()
    const [fullContent, setFullContent] = useState()
    const [originalFullContent, setOriginalFullContent] = useState()

    const [initData, setInitData] = useState()


    const [abstract, setAbstract] = useState()
    const [isPublish, setIsPublish] = useState(false)
    const [isDraft, setIsDraft] = useState(false)
    const [characters, setCharacters] = useState(0)
    const [words, setWords] = useState(0)


    const [image, setImage] = useState({ preview: '', data: '' })
    const [status, setStatus] = useState('')
    const [insertData, setInsertData] = useState(false)


    const handleSubmitImage = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('picturePro', image.data)
        // const response = await addPicture(formData)
        // console.log(response)

        // if (response) setStatus(response.statusText)
    }

    const handleFileImageChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
    }

    const handleSubmit = async (e) => {

        const postInput = {
            isDraft: isDraft,
            isPublish: isPublish,
            title: title,
            content: content,
            abstract: abstract,
            fullContent: fullContent,
            author: 'chanhly'
        }

        const response = await creatNewPost(postInput)

        console.log(response)
    }
    const handleCancelPost = async (e) => {

        // const formData = new FormData()
        // formData.append('picturePro',)
        // const response = await addPicture(formData)
    }

    const handlePreview = async () => {
        setIsPreview(!isPreview)
    }

    return (
        <>
            {!isPreview ? (<>
                <div className='flex flex-col mt-5 text-center'>
                    <div>
                        {/* <!-- component --> */}
                        <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Add New Post</div>
                        <div className="editor w-full mx-auto flex flex-col text-gray-800 p-4 shadow-lg ">


                            <div className="w-full mx-auto">
                                <input className="title w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                                <div>
                                    <CKEditor
                                        editor={Editor}
                                        config={editConfig}
                                        data={initData}
                                        onChange={(event, editor) => {

                                            setCharacters(editor.plugins.get('WordCount').characters)
                                            setWords(editor.plugins.get('WordCount').words)
                                            setContent(editor.plugins.get('Title').getBody())
                                            setAbstract(editor.plugins.get('Title').getTitle())

                                            const substring1 = `<svg class="ck ck-icon ck-reset_all-excluded ck-icon_inherit-color" viewBox="0 0 16 16"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"></path><path fill-opacity=".256" d="M1 1h14v14H1z"></path><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"></path><path fill-opacity=".254" d="M1 1h14v14H1z"></path></g></svg>`
                                            const substring2 = `<div class="ck ck-reset_all ck-widget__type-around"><div class="ck ck-widget__type-around__button ck-widget__type-around__button_before" title="Insert paragraph before block" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div><div class="ck ck-widget__type-around__button ck-widget__type-around__button_after" title="Insert paragraph after block" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"></path></svg></div>`
                                            const stringDOM = editor.editing.view.getDomRoot().innerHTML.replace(/alt=""/g, `alt="" / `)
                                                .replaceAll(substring1, ``).replaceAll(substring2, ``);
                                            setFullContent(stringDOM)

                                            console.log(fullContent)

                                            setOriginalFullContent(editor.editing.view.getDomRoot().outerHTML)

                                        }
                                        }
                                    />
                                </div>
                                
                                <div>
                                    <SelectDate postCreatedAt={1596493121717} />
                                </div>

                                <div>
                                    <div className='flex flex-col mt-10 text-center'>
                                        <h1 className='font-bold'>Add Image Banner</h1>
                                        <hr></hr>

                                        <div>
                                            <input className='mt-10' type='file' name='file' onChange={handleFileImageChange}></input>
                                            <button className='border border-solid rounded-lg p-1 pr-4 pl-4' type='submit' onClick={handleSubmitImage}>Submit</button>
                                        </div>
                                        <div className='flex mt-10 justify-center text-center'>
                                            {image.preview && <img src={image.preview} width='200' height='200' alt='' />}
                                        </div>
                                        {status && <h4>{status}</h4>}
                                    </div>
                                </div>

                                <div className='flex flex-row'>
                                    <button type="submit" className="flex items-right m-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={() => {
                                        setIsDraft(false)
                                        setIsPublish(true)
                                        handleSubmit()
                                    }}> Publish post </button>
                                    <button type="submit" className="flex items-right m-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={() => {
                                        setIsDraft(false)
                                        setIsPublish(true)
                                        handlePreview()
                                    }}> Preview </button>
                                </div>
                            </div>

                            {/* <!-- icons --> */}
                            <div className="icons flex text-gray-500 m-2">
                                <div className="count ml-auto text-gray-400 text-xs font-semibold">characters: {characters} - words: {words}</div>
                            </div>

                            {/* <!-- buttons --> */}
                            <div className="buttons flex">
                                <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" onClick={handleCancelPost}>Cancel</div>
                                <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" onClick={(e) => {
                                    setIsDraft(true)
                                    setIsPublish(false)
                                    handleSubmit()
                                }}>Save Draft</div>

                            </div>
                        </div>
                    </div>
                </div>
            </>) : (<>
                <div>
                    <button onClick={() => {
                        setInitData(originalFullContent)
                        setIsPreview(!isPreview)
                    }}>Back</button>
                    {image.preview && <img src={image.preview} width='400' height='1000' alt='' />}
                    <div dangerouslySetInnerHTML={{ __html: fullContent }}></div>
                </div>
            </>)
            }
        </>
    )
}

export default AddPostCKEditor
























// setFullContent(editor.model.document.selection.getFirstRange().getItems())
// console.log(editor.editing.view.domRoots)
// setFullContent(editor.editing.view.getDomRoot())
// setFullContent(editor.ui.getEditableElement())

// setFullContent(editor.editing.view.domConverter)
// console.log(editor.editing.view.getDomRoot())
// console.log(editor.editing.view.attachDomRoot)
// console.log(editor.plugins.get('Title').getBody())
// console.log(editor.getData())
// console.log(fullContent)
// console.log(editor.ui.getEditableElement())
// console.log(editor.editing.view.getDomRoot())
// console.log(editor.getData())
// console.log(editor.sourceElement)
// console.log(editor.data.htmlProcessor.htmlWriter.getHtml())
// console.log(editor.data.viewDocument.getRoot())
// console.log(editor.data.htmlProcessor.domConverter.mapViewToDom())
// console.log(editor.ui.getEditableElement().innerHTML)






// const editConfig = {
//     toolbar: {
//         // items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', 'alignment', 'code', 'codeBlock', 'findAndReplace', 'fontColor', 'fontFamily', 'fontSize', 'fontBackgroundColor', 'highlight', 'horizontalLine', 'htmlEmbed', 'imageInsert']
//         items: [
//             'undo', 'redo',
//             '|', 'heading',
//             '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
//             '|', 'bold', 'italic', 'underline', 'highlight', '|', 'subscript', 'superscript',
//             '|', 'alignment', 'outdent', 'indent', 'insertTable',
//             '-', // break point
//             '|',
//             '|', 'link', 'mediaEmbed', 'blockQuote', 'code', 'codeBlock',
//             '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
//             '|', 'findAndReplace',
//         ],
//         shouldNotGroupWhenFull: true
//     },
//     image: {
//         toolbar: [
//             'imageTextAlternative',
//             'imageStyle:inline',
//             'imageStyle:block',
//             'imageStyle:side',
//             'linkImage'
//         ]
//     },
//     link: {
//         decorators: {
//             toggleDownloadable: {
//                 mode: 'manual',
//                 label: 'Downloadable',
//                 attributes: {
//                     download: 'file'
//                 }
//             },
//             openInNewTab: {
//                 mode: 'manual',
//                 label: 'Open in a new tab',
//                 defaultValue: true,
//                 attributes: {
//                     target: '_blank',
//                     rel: 'noopener noreferrer'
//                 }
//             }
//         }
//     },
//     removePlugins: ["MediaEmbedToolbar", 'title'],
//     title: {
//         placeholder: 'Type your abstract'
//     },
//     placeholder: 'Type your content',
//     // allowedContent:
//     // 	'h1 h2 h3 p blockquote strong em;' +
//     // 	'a[!href];' +
//     // 	'img(left,right)[!src,alt,width,height];' +
//     // 	'table tr th td caption;' +
//     // 	'span{!font-family};' +
//     // 	'span{!color};' +
//     // 	'span(!marker);' +
//     // 	'del ins'
// }
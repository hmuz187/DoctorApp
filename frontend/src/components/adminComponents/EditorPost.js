import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { creatNewPost } from '../../apis/admin'


const editConfig = {
    toolbar: {
        // items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', 'alignment', 'code', 'codeBlock', 'findAndReplace', 'fontColor', 'fontFamily', 'fontSize', 'fontBackgroundColor', 'highlight', 'horizontalLine', 'htmlEmbed', 'imageInsert']
        items: [
            'undo', 'redo',
            '|', 'heading',
            '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
            '|', 'bold', 'italic', 'underline', 'highlight', '|', 'subscript', 'superscript',
            '|', 'alignment', 'outdent', 'indent',
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
    removePlugins: ["MediaEmbedToolbar"],
    title: {
        placeholder: 'Type your first line'
    },
}

const dataExamples = {
}


const EditorPost = () => {



    const [title, setTitle] = useState('')
    const [content, setContent] = useState()
    const [isPublish, setIsPublish] = useState(false)
    const [isDraft, setIsDraft] = useState(false)
    const [characters, setCharacters] = useState(0)
    const [words, setWords] = useState(0)


    const handleSubmit = async (e) => {

        const postInput = {
            isDraft: isDraft,
            isPublish: isPublish,
            title: title,
            content: content,
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




    return (
        <div className='flex flex-col mt-5 text-center'>


            <div>
                {/* <!-- component --> */}
                <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Edit Post</div>
                <div className="editor w-full mx-auto flex flex-col text-gray-800 p-4 shadow-lg ">


                    <div className="w-full mx-auto">
                        <input className="title w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <div>
                            <CKEditor
                                editor={Editor}
                                config={editConfig}
                                data={content}
                                onChange={(event, editor) => {
                                    setCharacters(editor.plugins.get('WordCount').characters)
                                    setWords(editor.plugins.get('WordCount').words)
                                    setContent(editor.getData())
                                }}
                            />
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
                                handleSubmit()
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
    )
}

export default EditorPost
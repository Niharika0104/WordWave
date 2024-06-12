

import dynamic from 'next/dynamic';
import { useMemo, useState } from "react";
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function App() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    // Memoize the configuration object with additional tools
    const quillConfig = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'font': [] }, { 'size': ['2rem'] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'align': [] }],
                ['link', 'image', 'video'],
                ['clean']
            ],
        },
        clipboard: {
            matchVisual: false,
        },
    }), []);

    // Define the formats you want to support
    const formats = [
        'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script', 'header', 'blockquote', 'code-block',
        'list', 'bullet', 'indent',
        'direction', 'align',
        'link', 'image', 'video'
    ];

    return (
      <>
      <div className="text-2xl font-bold text-black">
      <h1 className=" font-bold">
               <span className='text-indigo-700 font-extrabold font-poppins'>Word</span>
               <span className='text-yellow-500 font-poppins font-extrabold'>Wave</span>
               <span className='text-2xl'>.</span>


               
            </h1></div>
        <ReactQuill
            value={title}
            onChange={setTitle}
            modules={quillConfig}
            formats={formats}
            placeholder="Enter the title"
            className='w-[70%] mx-auto border-0 mt-5'
        />
        <ReactQuill
        value={body}
        onChange={setBody}
        modules={quillConfig} // Disable toolbar
        formats={formats}
        placeholder="Enter the content"
        className="w-[70%] mx-auto border-0 text-2xl placeholder:text-2xl placeholder:text-green-300"
       
    />
    </>
    );
}

export default App;


import Files from '../Components/Files/Files';
import Editor from '../Components/Editor/Editor'
import 'codemirror/lib/codemirror.css'
import { useEffect, useState } from "react";
import styles from '../Components/Files/Files.module.scss'
import  Login  from "../Components/Login/Login"

const EditorPage = () => {

    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')


    const [srcDoc, setSrcDoc] = useState('')
    

    useEffect(() => {

        setSrcDoc(`
        <html>
            <head>
                <style>
                ${css}
                </style>
            </head>
            <body>${html}</body>
            <script>${js}</script>
        </html>
    `)
        
    }, [html, css, js])


    return ( <>
    <Login />
        <div className={styles.mainContainer}>
            
            <div>
            <Files />
            </div>
            
            <div className={styles.leftPage}>
            
            

            <div className={styles.editorContainer}>

                <div className={styles.editor}>
                    <Editor language="xml" value={html} onChange={setHtml} displayName="HTML"/>
                    <Editor language="css" value={css} onChange={setCss} displayName="CSS"/>
                    <Editor language="javascript" value={js} onChange={setJs} displayName="JS"/>
                </div>

                <div className={styles.preview}>
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default EditorPage;
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Article.css'
import Menubar from "../MenuBar/Menubar";
import {Navigate} from "react-router-dom";
import Card from "@mui/material/Card";
import gfm from 'remark-gfm';

const markdownFilePath = `${process.env.PUBLIC_URL}/test.md`;

interface MarkdownComponentProps {
    username: string,
    onLogout: any,
    markdownFile: string; // Path to your Markdown file
}

const Article: React.FC<MarkdownComponentProps> = ({ markdownFile= markdownFilePath, username, onLogout }) => {
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        // Fetch the Markdown file content
        fetch(markdownFile)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, [markdownFile]);

    return (
        <>
        <h2 className="ArticleHead">{username}'s Article</h2>
        <Card className="ArticleCard" variant="outlined">
        <div className='Article'>
            {!username && (<Navigate to="/login" replace />)}
            <Menubar username={username} onLogout={onLogout} />
            <div>
                {/* Render the Markdown content */}
                <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
                {/*<ReactMarkdown components={renderers}>{markdownContent}</ReactMarkdown>*/}
            </div>
        </div>
        </Card>
        </>
    );
};

export default Article;

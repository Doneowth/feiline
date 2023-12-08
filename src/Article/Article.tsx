import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const markdownFilePath = `${process.env.PUBLIC_URL}/test.md`;

interface MarkdownComponentProps {
    markdownFile: string; // Path to your Markdown file
}

const Article: React.FC<MarkdownComponentProps> = ({ markdownFile= markdownFilePath }) => {
    const [markdown, setMarkdown] = useState<string>('');

    useEffect(() => {
        // Fetch the Markdown file content
        fetch(markdownFile)
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, [markdownFile]);

    return (
        <div>
            {/* Render the Markdown content */}
            <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />
        </div>
    );
};

export default Article;

// Home.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import ArticleCard from '../ArticleCard/ArticleCard'
import Menubar from "../MenuBar/Menubar";

interface HomeProps {
    username: string; // Explicitly specify the type as string
    onLogout: () => void;
}

const Home: React.FC<HomeProps> = ({ username, onLogout }) => {
    return (

        <>
            <div>
                <Menubar onLogout={onLogout} username={username}/>
            </div>
            <div>
                <h4>{username}'s Blog!</h4>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 225,
                            height: 144,
                        },
                    }}
                >
                    <ArticleCard to="/article/1"/>
                    <ArticleCard to="/article/1"/>
                    <ArticleCard to="/article/1"/>

                </Box>
            </div>
        </>
    );
};

export default Home;

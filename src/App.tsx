import { useState } from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HeadAppBar from './AppBar/HeadAppBar';
import MainPage from './MainConteiners/MainPage';
import AboutProjectsPage from './MainConteiners/AboutProjectsPage';
import Box from '@mui/material/Box';
import ExperiencePage from './MainConteiners/ExperiencePage';

function App() {

  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };


  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <MainPage />;
      case 1:
        return <ExperiencePage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <>

      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'auto' }}>
        <HeadAppBar onButtonClick={handlePageChange} />

        <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: "#EDEEF0"}}>
          <Container fixed maxWidth="xl" sx={{ flex: 1, backgroundColor: "#EDEEF0" }}>
            {renderPage()}
          </Container>
        </Box>
      </Box>
    </>

  );
}

export default App;

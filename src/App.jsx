import CssBaseline from '@mui/material/CssBaseline';

import ThemeProvider from "./styles"
import Home from './pages/home'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App

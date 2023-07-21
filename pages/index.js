import React, { useState } from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import News from "./News";
import SearchAppBar from "@/components/CardNavbar";

export default function Home() {
  const [theme , setTheme] = useState(true);
const changeTheme = () =>{
setTheme(!theme);
// console.log(theme);
}

  const darkTheme = createTheme({
    palette: {
      mode: theme?'dark':'light',
    },
  });

return(
  <>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
  {/* <div className=""> */}
  <SearchAppBar changingTheme = {changeTheme}/>
<News/>
{/* </div> */}
</ThemeProvider>
  </>
)
};
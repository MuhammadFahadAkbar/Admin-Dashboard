import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/sidebar";
import Dashboard from "./pages/global/dashboard";
// import Team from "./pages/global/team";
// import Contacts from "./pages/global/contacts";
// import Invoices from "./pages/global/invoices";
// import Form from "./pages/global/form";
// import Calendar from "./pages/global/calendar";
// import FAQ from "./pages/global/faq";
// import Bar from "./pages/global/bar";
// import Pie from "./pages/global/pie";
// import Line from "./pages/global/line";
// import Geography from "./pages/global/geography";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/calendar" element={<Calendar />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;

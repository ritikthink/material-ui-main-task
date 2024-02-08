import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AccordionView from "./Components/AccordionView";
import NavbarView from "./Components/NavbarView";
import DatePickerView from "./Components/DatePickerView";
import TimePickerView from "./Components/TimePickerView";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarView />
        <Container fixed>
          <Routes>
            <Route>
              <Route path="/" element={<AccordionView />} />
              <Route path="/datepicker" element={<DatePickerView />} />
              <Route path="/timepicker" element={<TimePickerView />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

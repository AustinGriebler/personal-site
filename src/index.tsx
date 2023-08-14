import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import { FooterMenu, NavigationMenu } from "./components/";
import ErrorPage from "./pages/ErrorPage.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          fontFamily: "'Dosis', system-ui, sans-serif",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          padding: "0",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          position: "relative",
          textDecoration: "none",
          padding: "0.2rem 0",
          [`&::before`]: {
            content: "''",
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "115%",
            height: "1px",
            transformOrigin: "right",
            transform: "scaleX(0)",
            background: "white",
            transition: "transform 300ms ease",
            zIndex: "1",
          },
          [`&:hover`]: {
            [`&::before`]: {
              transformOrigin: "left",
              transform: "scaleX(1)",
            },
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: "'Dosis', system-ui, sans-serif",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Dosis', system-ui, sans-serif",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: "1px solid white",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white",
          fontFamily: "'Dosis', system-ui, sans-serif",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
          fontFamily: "'Dosis', system-ui, sans-serif",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "white",
          },
          fontFamily: "'Dosis', system-ui, sans-serif",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "white",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "white",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "white",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <NavigationMenu />
      <div className="grow items-end grid">
        <RouterProvider router={router} />
        <FooterMenu />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);

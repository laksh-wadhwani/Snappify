import { createRoot } from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
import {dark} from "@clerk/themes"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLISHABLE_KEY)
    throw new Error("Missing Publishable Key")

createRoot(document.getElementById('root')!).render(
    <ClerkProvider 
    appearance={{
        theme: dark,
        colorPrimary: "#4F39F6",
        colorTextOnPrimaryBackground: "#ffffff"
    }}
    publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    </ClerkProvider>
)
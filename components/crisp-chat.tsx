"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("f9fb82b4-d6ee-4178-bde1-f7914a463df0")
    }, [])
    return null
}
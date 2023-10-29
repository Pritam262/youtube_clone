'use client'
import { useAppContext } from "@/app/context/appContext";
import { useEffect } from "react";
export default function Dashboard() {
    const { setisModelHidden } = useAppContext();
    useEffect(() => {
        setisModelHidden(true)
    }, [])

    return (
        <h4>Dashboard page</h4>
    )
}
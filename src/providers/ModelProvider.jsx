import UploadModel from "../components/UploadModel";
import { useEffect, useState } from "react";

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null
    }
    
    return (
        <>
            <UploadModel />
        </>
    )
}

export default ModelProvider;
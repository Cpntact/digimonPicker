import ScoreModel from "../components/ScoreModel";
import UploadModel from "../components/UploadModel";
import CardModel from "../components/CardModel";
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
            <ScoreModel />
            <CardModel />
        </>
    )
}

export default ModelProvider;
import React from 'react'
import { useSelector } from 'react-redux'

interface Props {
    az: string;
    en: string;
    ru: string;
}

const StaticLang: React.FC<Props> = ({ en, az, ru }) => {
    const currentLang = useSelector((state: any) => state.lang);

    if (currentLang === 'en') return <>{en}</>;
    if (currentLang === 'ru') return <>{ru}</>;
    return <>{az}</>;
}

export default StaticLang;
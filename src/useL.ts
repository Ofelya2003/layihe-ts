import { useSelector } from "react-redux";

export const useL = () => {
 
  const lang = useSelector((state: any) => state.lang) || "az";

  return (az: any, en: any, ru: any) => {
    if (lang === "en") return en;
    if (lang === "ru") return ru;
    return az;
  };
};
import { getLocale } from "@/utils/getLocale";
import { getDictionary } from "@/utils/dictionaries";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useTranslate(dictionaryParam: string) {
  const pathName = usePathname();
  const [dictionary, setDictioary] = useState();

  const getClientDictionary = async () => {
    setDictioary(await getDictionary(dictionaryParam, getLocale(pathName)));
  };

  useEffect(() => {
    getClientDictionary();
  }, []);

  return dictionary;
}

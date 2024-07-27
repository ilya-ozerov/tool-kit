import { FC, useEffect, useRef, useState } from "react";
import { Input } from "shared";

interface ISearchField {
    query: string;
    onChangeQuery: (query: string) => void;
    className?: string;
}

export const SearchField: FC<ISearchField> = ({
    onChangeQuery,
    className = "",
}) => {
    const [tempValue, setTempValue] = useState("");
    const timeoutRef = useRef(0);

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <Input
            value={tempValue}
            onChange={(ev) => {
                clearTimeout(timeoutRef.current);
                setTempValue(ev.target.value);

                timeoutRef.current = setTimeout(() => {
                    onChangeQuery(ev.target.value);
                }, 1500);
            }}
            className={className}
        />
    );
};

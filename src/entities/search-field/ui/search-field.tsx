import { FC, useEffect, useRef, useState } from "react";
import { Input } from "shared";

interface ISearchField {
    query: string;
    onChangeQuery: (query: string) => void;
    className?: string;
}

export const SearchField: FC<ISearchField> = ({
    query,
    onChangeQuery,
    className = "",
}) => {
    const [tempValue, setTempValue] = useState(query);

    useEffect(() => {
        setTempValue(query);
    }, [query]);

    const timeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <Input
            data-testid="search-field"
            value={tempValue}
            onChange={(ev) => {
                clearTimeout(timeoutRef.current);
                setTempValue(ev.target.value);

                timeoutRef.current = setTimeout(() => {
                    onChangeQuery(ev.target.value);
                }, 1000);
            }}
            className={className}
        />
    );
};

import { ChangeEvent } from 'react';

export interface ISearchProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    value: string;
    status: number | null;
}

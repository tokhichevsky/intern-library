import React from "react";
export declare type TInputProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> & {
    endAdornment?: React.ReactNode;
    startAdornment?: React.ReactNode;
    size?: 'large' | 'default';
};

import React, { type FC } from 'react';
import type { ButtonProps } from './ButtonTypes';

export const Button: FC<ButtonProps> = (props) => {
    const {
        onClick = () => { },
        disabled = false,
        loading = false,
        children,
        ...rest
    } = props;

    return (
        <button {...rest} onClick={(event) => onClick(event)} disabled={loading || disabled}>
            {loading ? 'Loading ...' : children}
        </button>
    );
};


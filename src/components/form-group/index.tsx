import React, { ReactElement, useEffect } from 'react'
import { FormGroupStyled } from './index.styles';

interface Props {
    children: React.ReactElement | React.ReactElement[];
}

export const FormGroup = (props: Props): ReactElement => {
    return (
        <FormGroupStyled>
            {props.children}
        </FormGroupStyled>
    );
};

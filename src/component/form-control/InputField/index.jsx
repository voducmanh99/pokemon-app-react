import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled} = props;
    const {errors , touchedFields} = form.formState;
    const hasError = touchedFields[name] && errors[name]

    console.log(errors[name],touchedFields[name]);
    

    return (

        <Controller
            control={form.control}
            name={name}
            render={({ field }, formState) =>
                <TextField 
                    label={label} 
                    {...field} 
                    error={!!hasError} 
                    helperText={errors[name]?.message}
                />
            }

            fullWidth
            disabled={disabled}

        />
    );
}

export default InputField;
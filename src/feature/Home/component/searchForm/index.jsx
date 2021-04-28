import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../component/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
};

function SearchForm(props) {
    const {onSubmit} = props
    const schema = yup.object().shape({
        content: yup.string().required("Plase enter title")
    });

    const form = useForm({
        defaultValues: {
            content: ""
        },
        resolver: yupResolver(schema),
    })

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputField name="content" label="search" form={form}/>
        </form>
    );
}

export default SearchForm;
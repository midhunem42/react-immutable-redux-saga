import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import LoadingIcon from "@material-ui/icons/Cached";
import React from "react";

export const Field = ({
    label,
    name,
    value,
    onChange,
    errors,
    setErrors,
    pristine,
    validating,
    validate,
    formSubmitted,
    ...other
}) => {
    let showErrors = (!pristine || formSubmitted) && !!errors.length;
    let error;
    if (!!errors.length) {
        errors.map(field => error = field);
    }
    return (
        <FormControl className="field" error={showErrors}>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Input
                id={name}
                value={value}
                onChange={onChange}
                onBlur={() => !pristine && validate()}
                endAdornment={
                    <InputAdornment position="end">
                        {validating && <LoadingIcon className="rotate" />}
                    </InputAdornment>
                }
                {...other}
            />
            <FormHelperText component="div">
                {/* {showErrors && errors.map(errorMsg => <div key={errorMsg}>{errorMsg}</div>)} */}
                {showErrors && <div key={error}>{error}</div>}
            </FormHelperText>
        </FormControl>
    );
};


export const handleSubmit = async (e,formData,setState,setStep,setErrors,schema) => {

    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form is valid, submit data:", formData);
      setState(formData);

      setStep((prev:any) => prev + 1);

      // Add your form submission logic here
    } catch (validationErrors) {
      const errorsObj = validationErrors.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      setErrors(errorsObj);
    }
  };
  export   const radioHandleSubmit = async (e,formData,schema,setState,setStep,stringForm,setErrors) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form is valid, submit data:", formData);
      console.log(stringForm)
      setState(stringForm);

      setStep((prev: any) => prev + 1);

      // Add your form submission logic here
    } catch (validationErrors) {
      const errorsObj = validationErrors.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      setErrors(errorsObj);
      // console.log(validationErrors)
    }
  };
import { addDoc, collection } from "@firebase/firestore";
import db  from  "./firebaseConfig"
import WhatWeDo from "@/views/Form/thirdStep/WhatWeDo";
import WhatWeProvide from "@/views/Form/thirdStep/WhatWeProvide";
import GuestRequirments from "@/views/Form/thirdStep/GuestRequirments";
import Localisation from "@/views/Form/thirdStep/Localisation";

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
export const handleFinalSubmit = async (e,formData,setErrors,schema,finalform) => {

    e.preventDefault();
    console.log(finalform);
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form is valid, submit data:", formData);
      const handleSubmit = async (event) => {
        // event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "data"), {
                profileInfo :{
                  firstName: finalform.finalForm.profileInfo.firstName,
                  lastName: finalform.finalForm.profileInfo.lastName,
                  birthday: finalform.finalForm.profileInfo.birthday,
                  nationality: finalform.finalForm.profileInfo.nationality,
                  email: finalform.finalForm.profileInfo.email,
                  phone: finalform.finalForm.profileInfo.phone,
                },
                profilePhoto :{
                  image: finalform.finalForm.profilePhoto.image,
                },
                locationInfo :{
                  country: finalform.finalForm.locationInfo.country,
                  city: finalform.finalForm.locationInfo.city,
                  years: finalform.finalForm.locationInfo.years,
                  adress: finalform.finalForm.locationInfo.adress,
                },
                languages : {
                  languages: finalform.finalForm.languages.languages,
                  englishLevel: finalform.finalForm.languages.englishLevel,
                },
                passions : {
                  secondPassion: finalform.finalForm.passions.secondPassion,
                  bestThingAboutCity: finalform.finalForm.passions.bestThingAboutCity,
                  description: finalform.finalForm.passions.description,
                },
                expertice : {
                  activityHosting: finalform.finalForm.expertice.activityHosting,
                  licence: finalform.finalForm.expertice.licence,
                },
                access : {
                  whatYouDo: finalform.finalForm.access.whatYouDo,
                },
                connection : {
                  likeYou:finalform.finalForm.connection.likeYou
                },
                themes :{
                  firstTheme: finalform.finalForm.themes.theme,
                  secondTheme: finalform.finalForm.themes.secondTheme,
                },
                title: finalform.finalForm.title , 
                whatWeDo :{
                  description: finalform.finalForm.whatWeDo.description,
                  experienceDuration: finalform.finalForm.whatWeDo.experienceDuration,
                },
                whatWeProvide : {
                  firsService: finalform.finalForm.whatWeProvide.firstService , 
                  secondService: finalform.finalForm.whatWeProvide.secondService,
                },
                guestRequirements: {
                  minimumAge: finalform.finalForm.guestRequirements.minimumAge,
                  accessibilty: finalform.finalForm.guestRequirements.accessibilty,
                  activityLevel: finalform.finalForm.guestRequirements.activityLevel,
                  skillLevel: finalform.finalForm.guestRequirements.skillLevel,
                },
                localisation : {
                  country: finalform.finalForm.localisation.country,
                  street: finalform.finalForm.localisation.street,
                  city: finalform.finalForm.localisation.city,
                  stateAdress: finalform.finalForm.localisation.stateAdress,
                  zipCode: finalform.finalForm.localisation.zipCode,
                },
                groupSize:{
                  publicGroup: finalform.finalForm.groupSize.publicGroups,
                  privateGroup: finalform.finalForm.groupSize.privateGroups,
                },
                groupPricing :{
                  individualRate: finalform.finalForm.groupPricing.individualRate,
                  perInstanceRate: finalform.finalForm.groupPricing.perInstanceRate,
                }

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    handleSubmit()

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
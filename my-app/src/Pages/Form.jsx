import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const validate = Yup.object({
    name: Yup.string().min(3).max(15, "Must be 15 characters or less").required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(5).max(15, "Must be 15 characters or less").required('Required'),
});

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    name="name" 
                    placeholder="Enter Name" 
                    onChange={formik.handleChange} 
                    value={formik.values.name} 
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input 
                    id="email" 
                    name="email" 
                    placeholder="Enter Email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    placeholder="Enter Password" 
                    type="password"
                    onChange={formik.handleChange} 
                    value={formik.values.password} 
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

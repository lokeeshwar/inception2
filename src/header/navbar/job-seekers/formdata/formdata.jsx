import { useState } from "react";
import "./formdata.css";
import FormInput from "./forminput/forminput";

const Formdata = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileNo: "",
    qualification: "",
    resume: "",
    comments: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "The name filed is required!",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "The email filed is required!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobileNo",
      type: "text",
      placeholder: "Mobile No",
      errorMessage: "The mobileNo field is required",
      label: "Mobile Number",
    },
    {
      id: 4,
      name: "qualification",
      type: "text",
      placeholder: "Qualification",
      errorMessage: "The qualification field is required",
      label: "Qualification",
      required: true,
    },
    {
      id: 5,
      name: "resume",
      type: "file",
      errorMessage: "The resume field is required",
      label: "Resume",
      required: true,
    },
    {
        id: 6,
        name: "comments",
        type: "text",
        errorMessage: "The comments field is required",
        label: "Comments",
        required: true,
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
        <div className="card">
        <div className="formhead">
        <h4>Job Seekers Details</h4>
        </div>
        <div className="form-body">
        <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
            {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit" className="form-submit-btn">Submit</button>
            </div>
      
        
        </form>
        </div>
        
       
     
        </div>
          
    </div>
  );
};

export default Formdata;
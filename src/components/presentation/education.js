import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import * as actionTypes from "../../redux/actionTypes";
import {skinCodes, fieldCd} from './../../constants/typeCodes';


import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Education(props) {
  let history = useHistory();
  let [education,setEducation] = useState(props.education);

 
  const onchange =(e)=>{
    let key = e.target.name;
    let val = e.target.value;
     setEducation({...education,[key]:val});
     console.log("change");
  }
 const  onSubmit = async ()=>{
    props.addEducation(education);
    console.log(education);
    history.push('/finalize')
  }

  const getFieldData =(key)=>{
    if (education && education[key])
    {
      return education[key];
    }
    return "";
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={onchange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={onchange} value={getFieldData(fieldCd.Degree)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={onchange} value={getFieldData(fieldCd.City)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text"  name={fieldCd.GraduationYear}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contact} educationSection={education} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }


const mapStateToProps = function(state){
  return {
    document: state.documentReducer,
    contact: state.contactReducer,
    education: state.educationReducer
  }
}

const mapDispatchToProps  = function(dispatch){
  return{
    addEducation: (education)=>{
      dispatch({type:actionTypes.ADD_EDUCATION,education:education});
    }
  }
}


  


export default connect(mapStateToProps,mapDispatchToProps)(Education)


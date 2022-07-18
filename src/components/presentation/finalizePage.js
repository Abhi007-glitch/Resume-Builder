import React from "react";
import ResumePreview from './resumePreview'
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as documentActions from '../../actions/documentActions'
   function Finalize(props) {
    console.log("props ",props);
    let educationSection = props.educationSection;
  let contactSection = props.contactSection;
  let documentd = props.document;
    console.log("docs" ,documentd);
    const saveToDatabase= async()=>{
     
    }
     const downloadResume=()=> {
    
       const input = document.getElementById('resumePreview');
   
       html2canvas(input)
         .then((canvas) => {
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF("p", "mm", "a4");
           var width = pdf.internal.pageSize.getWidth();
           var height = pdf.internal.pageSize.getHeight();
           pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
         
           pdf.save("resume.pdf");
         }).catch(function(error){
           console.log(error)
         })
     }
    return (
      <div className="container full finalize-page" >
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
            <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={props?.document?.skinCd}></ResumePreview>   
          </div>
          <div className="finalize-settings center">            

             
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
             </div>
    </div>
    </div>
    </div>
    )

    
}

const mapStateToProps =function(state)
{
  return {
    educationSection:state.educationReducer,
    document :state.documentReducer,
    contactSection:state.contactReducer,
  }
}


// Action Creator: a function that creates an action, but does not dispatch it. You need to call the store's dispatch function to actually cause the mutation.
// diff. between action creator and action -  an action is a payload of information, and an action creator is a factory that creates an action

const mapDispatchToProps=function(dispatch){

// bindActionCreators -Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
// The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.
return {
  documentActions : bindActionCreators(documentActions,dispatch)
}

}


export default connect(mapStateToProps,mapDispatchToProps)(Finalize);

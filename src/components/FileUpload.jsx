import React from 'react'
import axios from 'axios';
  
class FileUpload extends React.Component{
 
    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }
 
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }
 
    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:8080/upload.php";
        // php -S 127.0.0.1:8080
        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })
        console.log('File Uploaded');
        
    }
 
    render(){
        return(
            <div className = "Upload">
                <div className="row" style = {{textAlign : 'center'}}>
                    <div className="col-md-6 offset-md-3">
 
                            
                            <div className="form-row">
                                <div style= {{marginTop:"4%"}} className="form-group col-md-6">
                                    <label className="text-white">Selecciona un archivo :</label>
                                    <br></br>
                                    <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div>
 
                            <div className="form-row">
                                <div className="col-md-6">
                                    <button style= {{marginTop: "1rem" , marginBottom: "1rem"}} type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )  
    }
}
 
export default FileUpload;
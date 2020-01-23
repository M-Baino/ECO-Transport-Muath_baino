import React, { Component } from "react";
import axios from "axios";

export default class AddBike extends Component {

  state = {
    selectedFile: null,
    uploadedFile: null
  }

  // addBike = async event => {
  //   event.preventDefault();
  //   let bikeName = event.target["bikeName"].value;
  //   let bikePhoto = event.target["bikePhoto"].value;
  //   let bikeDescription = event.target["bikeDescription"].value;

  //   let newBike = { bikeName, bikePhoto, bikeDescription };
  //   axios.post("http://localhost:9000/addBike", newBike).then(res => {
  //     console.log(res.data);
  //   });
  // };
       // "proxy": "http://localhost:9000" >>package.json => frontend

  fileSelector = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  fileUpload = async event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file',this.selectedFile)
    try {
      const res = await axios.post('http://localhost:9000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }  
      });
      const {fileName, filePath} = res.data;
      this.setState({ uploadedFile: fileName, filePath });
    } catch (err) {
      if(err.response.status === 500) {
        console.log('problem with the server');
      }
      else {
        console.log(err.response.data.msg);
      }
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.fileUpload}>
          <input type="text" name="bikeName" placeholder="Bike Name" />
          <br /><br />

          <input type="file" name="bikePhoto" onChange={this.fileSelector} />
          <br /><br />

          <input type="textArea" name="Bike Description" placeholder="Bike Description" />
          <br /><br />

          <input type="submit" value="upload"/>
        </form>
      </div>
    );
  }
}
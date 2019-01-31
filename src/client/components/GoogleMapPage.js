import React, { Component } from 'react';
import {  geocodeByAddress,  getLatLng } from 'react-places-autocomplete';
import { formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default class GoogleMapPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      latLng: "",
    }
  }

  componentDidMount(){
    console.log("componentDidMount");
    console.log("location:", this.props.location);
    const address = this.props.location;
      geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log("Success!");        
        console.log('Success', latLng);
        this.setState({
          latLng
        })
      })
      .catch(error => console.error('Error', error)); 
  }


  render(){
    console.log(this.props);
    console.log("latLng: ", this.state.latLng);
    const { latLng } = this.state;
    return(
      <div>
        <h1>Google Map Page</h1>
        <p>{this.props.location}</p>
        <p>{latLng.lat}</p>
        <p>{latLng.lng}</p>
        {this.state.latLng && 
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              center={this.state.latLng}
              zoom={10}
            >
              <AnyReactComponent
                lat={this.state.latLng.lat}
                lng={this.state.latLng.lng}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>        
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  location: formValueSelector("locationForm")(state, "location"),
})

// connected component 
GoogleMapPage = connect(
  mapStateToProps
)(GoogleMapPage)



// <p>Lat: {this.props.location.state.lat}</p>
// <p>Lng: {this.props.location.state.lng}</p>
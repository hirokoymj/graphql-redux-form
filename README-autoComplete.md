# Redux-Form Sample 1

### npm package

- [react-places-autocomplete](https://github.com/hibiken/react-places-autocomplete)
- [google-map-react](https://github.com/google-map-react/google-map-react)
- [redux-form](https://redux-form.com/8.1.0/docs/gettingstarted.md/)


**[Class Component] - Autocomplete location search**
  
```js
import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      latLng: ''
     };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        console.log("Success!!!");
        this.setState({
          latLng
        })        
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}
```


**[Functional Component with redux-form] - Autocomplete location search**
```js
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose, withHandlers, withProps } from 'recompose';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


const LocationSearchInput = ({ input, meta }) => (
  <PlacesAutocomplete
    value={input.value}
    onChange={input.onChange}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
        <input
          {...getInputProps({
            placeholder: 'Enter you address',
            className: 'form-control'
          })}
        />
        {meta.touched && meta.error && <label className="error">{meta.error}</label>}
        <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            // inline style for demonstration purpose
            const style = suggestion.active
              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className,
                  style,
                })}
              >
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </PlacesAutocomplete>
);


let AutoCompleteForm = props => {
  return (
      <Field name="location" component={LocationSearchInput} />
  )
}

export default compose(
  reduxForm({
    form: 'locationForm',
    destroyOnUnmount: false
  })
)(AutoCompleteForm);

 
```
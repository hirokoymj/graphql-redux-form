import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import PlacesAutocomplete from 'react-places-autocomplete';

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

 
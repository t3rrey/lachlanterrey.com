import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import locationButton from "../../assets/icons/locationButton.svg";
import styled from "styled-components";

const SearchBarContainer = styled.div``;
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);
        this.props.setLatLng(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  geoLocation() {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log({ coords });
      this.props.setLatLng({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div
            className={`search-wrapper ${
              suggestions.length ? "searching" : ""
            }`}
          >
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: `location-search-input`,
              })}
            />
            {(suggestions.length || loading) && (
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
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
            )}
            <img
              src={locationButton}
              alt=""
              width="20"
              onClick={this.geoLocation.bind(this)}
            />
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;

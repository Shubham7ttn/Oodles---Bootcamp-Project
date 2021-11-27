import React, { useState, useRef } from "react";
import "../../assets/styles/shippingForm.css";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export default function ShippingForm(props) {
  const dispatch = useDispatch();
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [address1Error, setAddress1Error] = useState("");
  const [address2Error, setAddress2Error] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const captureFirstName = useRef();
  const captureLastName = useRef();
  const captureAddress1 = useRef();
  const captureAddress2 = useRef();
  const captureCountry = useRef();
  const captureCity = useRef();
  const captureZipcode = useRef();
  const capturePhone = useRef();

  let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  function validateFirstName() {
    let message = "";
    if (captureFirstName.current.value.toString().trim() !== "") {
      if (specialChars.test(captureFirstName.current.value.toString().trim())) {
        message = "First name can't have special symbols";
      } else {
        message = "";
      }
    } else {
      message = "Please tell us your name";
    }

    setFirstNameError(message);
  }

  function validateLastName() {
    let message = "";
    if (captureLastName.current.value.toString().trim() !== "") {
      if (specialChars.test(captureLastName.current.value.toString().trim())) {
        message = "Last name can't have special symbols";
      } else {
        message = "";
      }
    } else {
      message = "Please tell us your last name";
    }

    setLastNameError(message);
  }

  function validateAddress1() {
    if (captureAddress1.current.value.toString().trim() === "") {
      setAddress1Error("Address Fields Can't be left empty");
    } else {
      setAddress1Error("");
    }
  }
  function validateAddress2() {
    if (captureAddress2.current.value.toString().trim() === "") {
      setAddress2Error("Address Fields Can't be left empty");
    } else {
      setAddress2Error("");
    }
  }
  function validateCountry() {
    if (captureCountry.current.value.toString().trim() === "") {
      setCountryError("Please Select 1 Country");
    } else {
      setCountryError("");
    }
  }
  function validateCity() {
    let message = "";

    if (captureCity.current.value.toString().trim() !== "") {
      if (specialChars.test(captureCity.current.value.toString().trim())) {
        message = "City can't have special symbols";
      } else {
        message = "";
      }
    } else {
      message = "Please tell us your city name";
    }

    setCityError(message);
  }
  function validateZip() {
    let message = "";

    if (captureZipcode.current.value.toString().trim() !== "") {
      if (captureZipcode.current.value.toString().length > 6) {
        message = "ZIP/Postal Code must be 6 digits long";
      } else {
        message = "";
      }
    } else {
      message = "Please tell your ZIP/Postal Code";
    }

    setZipcodeError(message);
  }
  function validatePhone() {
    let message = "";
    if (capturePhone.current.value.toString().trim() !== "") {
      if (!capturePhone.current.value.toString().trim().length > 10) {
        message = "Phone number must only have 10 digits";
      } else {
        message = "";
      }
    } else {
      message = "Please tell your Phone Number";
    }

    setPhoneError(message);
  }

  const shippingFormSubmitHandler = (event) => {
    event.preventDefault();
    let status = true;
    let firstName = captureFirstName.current.value;
    let lastName = captureLastName.current.value;
    let address1 = captureAddress1.current.value;
    let address2 = captureAddress2.current.value;
    let country = captureCountry.current.value;
    let city = captureCity.current.value;
    let zip = captureZipcode.current.value;
    let phone = capturePhone.current.value;

    if (
      firstName !== "" &&
      lastName !== "" &&
      address1 !== "" &&
      address2 !== "" &&
      country !== "" &&
      city !== "" &&
      zip !== "" &&
      phone != ""
    ) {
      let completeAddress = address1 + ", " + address2;
      let name = firstName + " " + lastName;
      let shippingAddress = {
        customerName: name,
        customerAddress: completeAddress,
        customerCountry: country,
        customerCity: city,
        customerZip: zip,
        customerPhone: phone,
      };
      dispatch({ type: "save address", customerAddress: shippingAddress });
      props.formHandler(true);
      Swal.fire("Thanks", "We have received your shipping address", "success");
    } else {
      Swal.fire(
        "Error Occured",
        "Kindly fill all the fields properly",
        "error"
      );
    }
  };
  return (
    <div id="shipping-details-form-container">
      <div id="shipping-details-form-header">
        <h1>Shipping Details</h1>
        <p>
          Kindly fill this form correcly as the address will be used for
          shipping your order
        </p>
      </div>
      <form onSubmit={shippingFormSubmitHandler}>
        <div class="fields" id="name-fields">
          <input
            class="error"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            ref={captureFirstName}
            onBlur={validateFirstName}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            ref={captureLastName}
            onBlur={validateLastName}
          />
          <div id="name-error">
            {firstNameError !== "" ? (
              <p class="form-error">{firstNameError}</p>
            ) : (
              <p></p>
            )}
            {lastNameError !== "" ? (
              <p class="form-error">{lastNameError}</p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div class="fields" id="address-line1-field">
          <input
            type="text"
            name="addressLine1"
            id="addressLine1"
            placeholder="Address Line 1"
            ref={captureAddress1}
            onBlur={validateAddress1}
          />
          {address1Error !== "" ? (
            <p class="form-error">{address1Error}</p>
          ) : (
            <p></p>
          )}
        </div>
        <div class="fields" id="address-line2-field">
          <input
            type="text"
            name="addressLine2"
            id="addressLine2"
            placeholder="Address Line 2"
            ref={captureAddress2}
            onBlur={validateAddress2}
          />
          {address2Error !== "" ? (
            <p class="form-error">{address2Error}</p>
          ) : (
            <p></p>
          )}
        </div>
        <div class="fields" id="country-city-field">
          <select
            name="country"
            id="country"
            ref={captureCountry}
            onBlur={validateCountry}
          >
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="England">England</option>
            <option value="Australia">Australia</option>
            <option value="Sri Lanka">Sri Lanka</option>
          </select>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            ref={captureCity}
            onBlur={validateCity}
          />
          <div id="city-country-error">
            {countryError !== "" ? (
              <p class="form-error">{countryError}</p>
            ) : (
              <p></p>
            )}
            {cityError !== "" ? <p class="form-error">{cityError}</p> : <p></p>}
          </div>
        </div>
        <div class="fields" id="zip-phone-field">
          <input
            type="number"
            name="zip"
            id="zip"
            placeholder="ZIP-Code"
            ref={captureZipcode}
            onBlur={validateZip}
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone"
            ref={capturePhone}
            onBlur={validatePhone}
          />
          <div id="zip-phone-error">
            {zipcodeError !== "" ? (
              <p class="form-error">{zipcodeError}</p>
            ) : (
              <p></p>
            )}
            {phoneError !== "" ? (
              <p id="last-name-error" class="form-error">
                {phoneError}
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>

        <div class="fields" id="shipping-options-div">
          <div id="free-shipping-container">
            <input
              type="radio"
              value="free"
              id="free-shipping"
              name="shipping-method"
              checked
            />
            <label htmlFor="free-shipping">
              <h3>Free Shipping</h3>
              <p>Between 2-5 working days</p>
            </label>
          </div>
          <div id="next-day-shipping-container">
            <input
              type="radio"
              value="next-day"
              id="next-day-shipping"
              name="shipping-method"
            />
            <label htmlFor="next-day-shipping">
              <h3>Next Day Shipping - &#8377; 50</h3>
              <p>Within 24 Hours from checkout</p>
            </label>
          </div>
        </div>
        <div id="submit-button-container">
          <button type="submit" id="submit-btn">
            Confirm Address
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { TbCameraPlus } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import style from "./AdPost.module.css";
import states from "../../Data/State";

export default function AdPost() {
  const [selectedImages, setSelectedImages] = useState(
    Array.from({ length: 10 }, () => null)
  );
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [roomAddress, setRoomAddress] = useState("");
  const [nearPlaces, setNearPlaces] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [acAvailable, setAcAvailable] = useState("");
  const [fanAvailable, setFanAvailable] = useState("");
  const [geyserAvailable, setGeyserAvailable] = useState("");
  const [description, setDescription] = useState("");

  const handleRoomTypeSelect = (roomType) => {
    setSelectedRoom((prevSelectedRoom) =>
      prevSelectedRoom === roomType ? "" : roomType
    );
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender((prevSelectedGender) =>
      prevSelectedGender === gender ? "" : gender
    );
  };
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...selectedImages];
      updatedImages[index] = file;
      setSelectedImages(updatedImages);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages[index] = null;
    setSelectedImages(updatedImages);
  };

  return (
    <div className={style.ad_post_wrapper}>
      <div className={style.backarrow_wrapper}>
        <span>
          <BiArrowBack className={style.back_arrow} />
        </span>
        <span className={style.title}>Post ad</span>
      </div>
      <form action="">
        <div className={style.pers_detail}>
          <div className={style.name}>
            <div className={style.fst_name}>
              <label htmlFor="firstName">
                Enter first Name<span className={style.necess}>*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={style.input_fst_name}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={style.lst_name}>
              <label htmlFor="lastName">
                Enter last Name<span className={style.necess}>*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={style.input_lst_name}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className={style.phone}>
              <label htmlFor="mob">
                Enter mobile no<span className={style.necess}>*</span>
              </label>
              <input
                type="text"
                id="mob"
                name="mobile"
                className={style.input_phone}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className={style.address}>
            <div className={style.state}>
              <label htmlFor="state" className={style.select_state}>
                Select state<span className={style.necess}>*</span>
              </label>
              <select
                id="state"
                className={style.input_state}
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="" className={style.state_option}>
                  Select a state
                </option>
                {states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="district">
                Enter Taluka, City<span className={style.necess}>*</span>
              </label>
              <input
                type="text"
                id="district"
                className={style.input_district}
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="sub_area">
                Enter room address<span className={style.necess}>*</span>
              </label>
              <input
                type="text"
                placeholder="For ex: Bajaj nagar, Shivajinagar"
                className={style.sub_area}
                value={roomAddress}
                onChange={(e) => setRoomAddress(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="near_places">
                Enter near places from room
                <span className={style.necess}>*</span>
              </label>
              <input
                type="text"
                placeholder="For ex: schools,colleges,companies etc"
                className={style.near_places}
                value={nearPlaces}
                onChange={(e) => setNearPlaces(e.target.value)}
              />
            </div>
          </div>

          <div className={style.ad_details}>
            <p className={style.room_types}>
              Room Type<span className={style.necess}>*</span>
            </p>

            <div className={style.room_type}>
              <div
                className={`${style.rooms_type} ${
                  selectedRoom === "Single Room" ? style.selected_room : ""
                }`}
                onClick={() => handleRoomTypeSelect("Single Room")}
              >
                Single Room
              </div>
              <div
                className={`${style.rooms_type} ${
                  selectedRoom === "Double Room" ? style.selected_room : ""
                }`}
                onClick={() => handleRoomTypeSelect("Double Room")}
              >
                Double Room
              </div>
              <div
                className={`${style.rooms_type} ${
                  selectedRoom === "1BHK" ? style.selected_room : ""
                }`}
                onClick={() => handleRoomTypeSelect("1BHK")}
              >
                1BHK
              </div>
              <div
                className={`${style.rooms_type} ${
                  selectedRoom === "2BHK" ? style.selected_room : ""
                }`}
                onClick={() => handleRoomTypeSelect("2BHK")}
              >
                2BHK
              </div>
              <div
                className={`${style.rooms_type} ${
                  selectedRoom === "3BHK" ? style.selected_room : ""
                }`}
                onClick={() => handleRoomTypeSelect("3BHK")}
              >
                3BHK
              </div>
            </div>

            <div className={style.genders}>
              <label htmlFor="gender">
                Giving for<span className={style.necess}>*</span>
              </label>
              <div>
                <span
                  id="gender"
                  className={`${style.g_span} ${
                    selectedGender === "Male" ? style.selected_gender : ""
                  }`}
                  onClick={() => handleGenderSelect("Male")}
                >
                  Male
                </span>
                <span
                  id="gender"
                  className={`${style.g_span} ${
                    selectedGender === "Female" ? style.selected_gender : ""
                  }`}
                  onClick={() => handleGenderSelect("Female")}
                >
                  Female
                </span>
              </div>
            </div>

            <div className={style.who_stay}>
              <label htmlFor="accommodation">
                Who can stay<span className={style.necess}>*</span>
              </label>
              <div>
                <select
                  id="accommodation"
                  name="who can stay"
                  className={style.select_accommodation}
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                >
                  <option value="family">Family</option>
                  <option value="bachelors">Bachelors</option>
                </select>
              </div>
            </div>
            <div className={style.extra_room_info}>
              <div>
                <div>
                  <label htmlFor="acAvailable">
                    AC Available<span className={style.necess}>*</span>
                  </label>
                </div>
                <select
                  id="acAvailable"
                  name="acAvailable"
                  className={style.select_ac}
                  value={acAvailable}
                  onChange={(e) => setAcAvailable(e.target.value)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <div>
                  <label htmlFor="fanAvailable">
                    Fan Available<span className={style.necess}>*</span>
                  </label>
                </div>
                <select
                  id="fanAvailable"
                  name="fanAvailable"
                  className={style.select_fan}
                  value={fanAvailable}
                  onChange={(e) => setFanAvailable(e.target.value)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <div>
                  <label htmlFor="geyserAvailable">
                    Geyser Available<span className={style.necess}>*</span>
                  </label>
                </div>
                <select
                  id="geyserAvailable"
                  name="geyserAvailable"
                  className={style.select_geyser}
                  value={geyserAvailable}
                  onChange={(e) => setGeyserAvailable(e.target.value)}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
          <div className={style.des}>
            <label htmlFor="desc">Description:</label>
            <textarea
              name="extra about property"
              id="desc"
              cols="40"
              rows="6"
              className={style.desc}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className={style.ad_photos}>
          <span>
              Upload Up to 10 photos <span id={style.necess}>*</span>
            </span>
          <div className={style.photo_wrapper}>
           
              {selectedImages.map((image, index) => (
                <div className={style.photo} key={index}>
                  {image ? (
                    <div className={style.imageContainer}>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={style.photo_image}
                      />
                      <span
                        className={style.closeIcon}
                        onClick={() => handleRemoveImage(index)}
                      >
                        <RxCross2 />
                      </span>
                    </div>
                  ) : (
                    <label
                      htmlFor={`photo${index}`}
                      className={style.photo_label}
                    >
                      <TbCameraPlus className={style.camera_icon} />
                      <input
                        type="file"
                        id={`photo${index}`}
                        name="vehicle_photos"
                        accept="image/*, image/jpg, image/jpeg, image/png"
                        className={style.photo_input}
                        onChange={(e) => handleImageUpload(e, index)}
                      />
                    </label>
                  )}
                </div>
              ))}
            </div>
            </div>
        </div>
        <div>
          <button className={style.btn_post}>Post now</button>
        </div>
      </form>
    </div>
  );
}

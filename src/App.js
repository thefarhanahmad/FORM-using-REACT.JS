import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    ZIP: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });
  // console.log(data)
  function getDataHandler(e) {
    const { name, value, checked, type } = e.target;
    setData((predata) => ({
      ...predata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // form submit handler
  function submitHandler(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    //wrapper
    <div className="bg-slate-200 pt-5">
      <div className="bg-white w-1/2 m-auto p-4 rounded-lg">
        {/* form card*/}
        <form onSubmit={submitHandler}>
          {/* firstname input */}
          <div className="flex flex-col w-full justify-center gap-2">
            <label htmlFor="first-name" className="text-sm font-semibold">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              placeholder="Farhan"
              value={data.firstName}
              onChange={getDataHandler}
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            />
          </div>

          {/* lastname input */}
          <div className="flex flex-col w-full justify-center gap-2">
            <label htmlFor="last-name" className="text-sm font-semibold">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Ahmad"
              value={data.lastName}
              onChange={getDataHandler}
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            />
          </div>

          {/* email address */}
          <div className="flex flex-col w-full justify-center gap-2">
            <label htmlFor="email" className="text-sm font-semibold">
              First name
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="akhtarfarhan281@gmail.com"
              value={data.email}
              onChange={getDataHandler}
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            />
          </div>

          {/* country dropdown */}
          <div>
            <label htmlFor="country" className="text-sm font-semibold">
              Country
            </label>
            <br />
            <select
              name="country"
              value={data.country}
              onChange={getDataHandler}
              id="country"
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            >
              <option>--select--</option>
              <option value="India">India</option>
              <option value="Africa">Africa</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* street address */}
          <div className="flex flex-col w-full justify-center gap-2">
            <label htmlFor="street" className="text-sm font-semibold">
              Street address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="1234 Main St"
              value={data.street}
              onChange={getDataHandler}
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            />
          </div>

          {/* city */}
          <div className="flex flex-col w-full justify-center gap-2">
            <label htmlFor="city" className="text-sm font-semibold">
              City
            </label>
            <input
              type="city"
              id="city"
              name="city"
              placeholder="Hariharganj"
              value={data.city}
              onChange={getDataHandler}
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            />
          </div>

          {/* state */}
          <div className="flex flex-col w-full justify-center gap-2">
            <label htmlFor="state" className="text-sm font-semibold">
              State / Province
            </label>
            <input
              type="state"
              id="state"
              name="state"
              placeholder="Jharkhand"
              value={data.state}
              onChange={getDataHandler}
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            />
          </div>

          {/* ZIP */}
          <div className="flex flex-col w-full justify-center gap-2">
            <label htmlFor="ZIP" className="text-sm font-semibold">
              ZIP / Postal code
            </label>
            <input
              type="ZIP"
              id="ZIP"
              name="ZIP"
              placeholder="822131"
              value={data.ZIP}
              onChange={getDataHandler}
              className="border-2 p-1 rounded-md border-b-cyan-200 outline-none shadow-lg w-full"
            />
          </div>

          {/* by email */}
          {/* checkboxes */}
          <div className="flex flex-col gap-2 mt-2 ">
            <fieldset>
              <p className="text-sm font-semibold">By Email</p>
            </fieldset>
            <div className="flex flex-row items-baseline gap-2 ">
              <input
                type="checkbox"
                name="comments"
                id="comments"
                checked={data.comments}
                onChange={getDataHandler}
              />
              <div>
                <label htmlFor="comments" className="text-sm font-semibold">
                  Comments
                </label>
                <p className="text-xs opacity-75 font-semibold">
                  Get notified when someones posts a comments on posting.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-baseline gap-2">
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={data.candidates}
                onChange={getDataHandler}
              />
              <div>
                <label htmlFor="candidates" className="text-sm font-semibold">
                  Canditates
                </label>
                <p className="text-xs opacity-75 font-semibold">
                  Get notified when a candidate applies for a job.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-baseline gap-2 ">
              <input
                type="checkbox"
                name="offers"
                id="offers"
                checked={data.offers}
                onChange={getDataHandler}
              />
              <div>
                <label htmlFor="offers" className="text-sm font-semibold">
                  Offers
                </label>
                <p className="text-xs opacity-75 font-semibold">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>

            {/* radion buttons */}
            <div>
              <fieldset>
                <legend className="text-sm font-semibold">
                  Push Notificatons
                </legend>
                <p className="text-xs opacity-75 font-semibold">
                  These are delivered via SMS to your mobile phone
                </p>
              </fieldset>

              <div className="flex flex-col mt-2">
                <div>
                  <input
                    type="radio"
                    name="pushNotifications"
                    id="everything"
                    value="Everything"
                    onChange={getDataHandler}
                    className="mr-1"
                  />
                  <label htmlFor="everything">Everything</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="pushNotifications"
                    id="same-as-email"
                    value="same-as-email"
                    onChange={getDataHandler}
                    className="mr-1"
                  />
                  <label htmlFor="same-as-email">Same as email</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="pushNotifications"
                    id="no-push Notifications"
                    value="no-push Notifications"
                    onChange={getDataHandler}
                    className="mr-1"
                  />
                  <label htmlFor="no-push Notifications">
                    No push notification
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* submit button */}
          <button className="bg-blue-700 py-1 px-2 rounded-lg text-white mt-4">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { useForm } from "react-hook-form";
import "../Styles/dashboardstyles.css";

export default function Dashboard() {
  const [bill, setBill] = useState([]);
  const user = getAuth().currentUser.email;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    var formdata = new FormData();
    formdata.append("billphoto", data.billphoto[0], data.billphoto[0].name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch(
      "https://billsaver.epiccodewizard2.repl.co/save/" +
        user +
        "?billno=" +
        data.billno +
        "&billtype=" +
        data.billtype,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(data);
  };

  useEffect(() => {
    const getBills = async () => {
      const res = await axios.get(
        `https://billsaver.epiccodewizard2.repl.co/fetch/email/${user}`
      );
      setBill(res.data);
      console.log(res);
    };
    getBills();
  });

  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard</h1>

      <div className="dash-div">
        <div className="viewbills-div">
          <h2>Your Bills</h2>
          {bill.map(({ billno, billphoto, billtype }) => (
            <div className="bill-card">
              <h3>{}</h3>
              <p>
                <a href={billphoto}>{billno + " - " + billtype}</a>
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} method="POST">
          <label>
            Bill ID:
            <input type="text" {...register("billno")} required />
          </label>

          <label>
            Bill Type:
            <input type="text" {...register("billtype")} required />
          </label>

          <label>
            Upload your Bill:
            <input {...register("billphoto")} type="file" />
          </label>

          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

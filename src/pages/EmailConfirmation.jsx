import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FcOk, FcCancel } from "react-icons/fc";
import { CgArrowLongRight } from "react-icons/cg";
import DotLoader from "react-spinners/DotLoader";
import axios from "axios";

const client = axios.create({
  baseURL: "https://the-garland-realty.herokuapp.com/v1",
});

const EmailConfirmation = () => {
  const [confirmationData, setConfirmationData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    client.get(`/auth/verify-email/${id}`).then((response) => {
      if (response.data.code === 200) {
        setError(false)
        setConfirmationData(response.data);
        setLoading(false);
      }
    }).catch(err => {
      setError(true)
      setLoading(false);
    })
  }, [id]);
  return (
    <>
      {loading && (
        <div className="email-confirmation">
          <DotLoader
            color={"#FF5A3C"}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!loading && (
        <div className="email-confirmation slide-in-bck-center">
          <div className="verification-image-container">
            { confirmationData.message ? <FcOk size={100} />  : <FcCancel size={100} />}
          </div>
          <div className="content">
            <h3>{`${confirmationData.message ? confirmationData.message : error ? "verification unsucessful" : ""}`}</h3>
            <div>
              <Link className="home" to="/">
                <span>Homepage</span>
                <CgArrowLongRight className="submit-icon" size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailConfirmation;

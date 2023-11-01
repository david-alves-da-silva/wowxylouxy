import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveOrder } from "../../lib/state/actions";
import useAuthentication from "../../lib/hooks/useAuthentication";

const styles = {
  height: "100vh",
  fontSize: 20,
};

function Success({ history }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.user }));
  const { handleAuthentication } = useAuthentication(dispatch);

  const getUserProfile = useCallback(() => {
    return new Promise((resolve) => {
      handleAuthentication();
      resolve();
    });
  }, [handleAuthentication]);

  const dispatchAndSaveOrder = useCallback(async () => {
    const items = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    const total = JSON.parse(localStorage.getItem("total"));
    const order = {
      owner_id: user?._id,
      email: user?.email,
      items: items,
      total: total,
    };
    await dispatch(saveOrder(order));
  }, [dispatch, user]);

  const clearStorage = useCallback(() => {
    return new Promise((resolve) => {
      localStorage.setItem("items", []);
      resolve();
    });
  }, []);

  const redirectHome = useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => history.push("/"), 2000);
      resolve();
    });
  }, [history]);

  useEffect(() => {
    async function confirmOrder() {
      await getUserProfile();
      await dispatchAndSaveOrder();
      await clearStorage();
      await redirectHome();
    }
    confirmOrder();
  }, [getUserProfile, dispatchAndSaveOrder, clearStorage, redirectHome]);

  return (
    <>
      <div
        style={styles}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="alert alert-success mt-3 mb-3">
          <p className="icontext">
            <i className="icon text-success fa fa-thumbs-up"></i>Thank you for
            your order & your payment
          </p>
        </div>
      </div>
    </>
  );
}

export default Success;

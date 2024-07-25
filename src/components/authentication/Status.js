// checks status of login for user
import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./account";

const Status = () => {
    const [status, setStatus] = useState(false);
    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then((session) => {
                console.log("session:", session);
                setStatus(true);
            })
            .catch(err => { console.log("Session status error:", err); })
    }, [])

    return <div>{status ? "you are logged in" : "please log in"}</div>
}

export default Status;
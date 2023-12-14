import { createContext } from "react";

const userContext = createContext({
    user: {
        name: 'Rashmi',
        email: "rashmi123@dummy.com"
    }
});

export default userContext;
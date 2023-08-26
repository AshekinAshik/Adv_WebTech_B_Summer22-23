import axios from 'axios';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const router = useRouter();

    const [user, setUser] = useState(null);

    const login = (username, cookie) => {
        setUser({ username, cookie });
    };

    const checkUser = () => {
        console.log("username: " + user.username)
        console.log("cookie: " + user.cookie)

        if (user.username != null && user.cookie != null) {
            return true;
        } else {
            return false;
        }
    };

    // const logout = () => {
    //     doLogout()
    // };

    // async function doLogout() {
    //     try {
    //         const response = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/logout',
    //             {
    //                 withCredentials: true
    //             });

    //         console.log(response)
    //         setUser(null);
    //         document.cookie = null;
    //         router.push('../manager/login');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const logout = () => {
        doLogout()
    };

    async function doLogout() {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/logout',
                {
                    withCredentials: true
                });

            console.log(response)
            setUser(null);
            document.cookie = null;
            router.push('../manager/login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <AuthContext.Provider value={{ user, login, logout, checkUser }}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuth = () => useContext(AuthContext);
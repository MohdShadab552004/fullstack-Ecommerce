import React,{useState,useEffect} from "react";
import UserContext from "./UserContext";

const  UserContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [isopen,setisopen] = useState(false);
    const [login,setlogin] = useState(false);
    const [singup,setsingup] = useState(false);
    const [cartdata,setcartdata] = useState([]);
    const [cartlength,setcartlength] = useState(0);
    const [cartlink,setcartlink] = useState({});
    const [orderplace,setorderplace] = useState(false);
    const [total,settotal] = useState(0);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });
    }, []);
   
    return (
        <UserContext.Provider value={{data,isopen,setisopen,login,setlogin,singup,setsingup,cartdata,setcartdata,cartlength,setcartlength,cartlink,setcartlink,total,settotal,orderplace,setorderplace}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
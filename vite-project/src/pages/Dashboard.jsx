import { useState, useEffect } from "react";
import axios from 'axios'
import Header from "./Header";

export default function Dashboard() {

    const [searchResult, setSearchResult] = useState([]);
    const [key, setKey] = useState("");
    useEffect(() => {
        const search = async () => {
            try {
                if (!key.trim()) {
                    setSearchResult([])
                    return
                }
                const res = await axios.get('https://new-server-cvbw.onrender.com/Dashboard', {params: {key: key, limit: 5}})
                setSearchResult(res.data.data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        search()
    }, [key])

    return (
        <div>
            <Header />
        <div class="padding">
    <div class="col-md-8">
        <div class="card"> <img class="card-img-top" src="./images/background.jpg" alt="Card image cap"/>
            <div class="card-body little-profile text-center">
                <div class="pro-img"><img src="./images/user.jpg" alt="user"/></div>
                <h3 class="m-b-0">Blank User</h3>
                <p>Artist</p> <button class="button main-btn">Follow</button>
                <div class="row text-center m-t-20">
                </div>
            </div>
        </div>
    </div>
</div>
</div>
);

};



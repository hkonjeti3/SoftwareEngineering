import { useState, useEffect } from "react";
import axios from 'axios'
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
        <form>
            <div className="search-wrapper">
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    />
                </div>
                {searchResult && searchResult.length > 0 && (
                    <div className="search-result">
                    {searchResult.map(userinfo => (
                        <div className="result-item" key={userinfo._id}>
                            <div className="user-info">
                                <p className="fname">{userinfo.fname}</p>
                                <p className="lname">{userinfo.lname}</p>
                                <p className="username">{userinfo.username}</p>
                            </div>
                        </div>
                    ))}
                    </div>

                )}
            </div>
        </form>
);

};



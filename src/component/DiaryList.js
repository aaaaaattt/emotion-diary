import "./DiaryList.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const sortOptionList = [
    {value:"latest", name: "최신순"},
    {value:"oldest", name:"오래된 순"},
];


const DiaryList = ({ data }) => {
    
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const navigate = useNavigate();

    const onClickNew = () => {
        navigate("/new");
    };

    const [sortedData, setsortedData] = useState([]);

    useEffect(()=> {
        const compare = (a,b) => {
            if (sortType === "latest"){
                return Number(b.date) - Number(a.date);
            } else {
                return Number(a.date) - Number(b.date);
            }
        };
        const copyList = JSON.parse(JSON.stringify(data));  //값은 같지만 참조값이 다른 객체 생성
        copyList.sort(compare);
        setsortedData(copyList);
    },[data,sortType]);

    return (
        <div className="DiaryList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <select value={sortType} onChange={onChangeSortType}>
                        {sortOptionList.map((it,idx) => ( 
                        <option key={idx} value={it.value}>
                            {it.name}
                        </option>
                    ))}</select>
                </div>
                <div className="right_col">
                    <Button
                    type={"positive"}
                    text={"새 일기 쓰기"}
                    onClick={onClickNew}
                    />
                </div>
            </div>
        </div>
    )
};
export default DiaryList;
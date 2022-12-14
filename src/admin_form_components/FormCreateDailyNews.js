import React, {useState} from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import './Forms.css'

function FormCreateDailyNews() {
    const user = useSelector((state) => state.user.currentUser);
    const user_id = user[0].id

    const [newsinfo, setNewsInfo] = useState("");
    const [newsdate, setNewsDate] = useState("");
    const [newstitle, setNewsTitle] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newsinfo === "" || newsdate ==="" || newstitle ==="") {
            setErrors("All parts must be filled!!")
        }
        else {
        Axios.post("https://team20-seffafkart.herokuapp.com/api/createnews", {
          author_id: user_id,
          content: newsinfo,
          date: newsdate,
          title: newstitle
        }).then((err) => {
          alert("Daily news is successfully created");
          //console.log(err);
          if(err === null) {
            console.log("act created")
          }
         });  
        }
      };

  return (
    <div className="form-content-news">
        <h1 className="title-act">Enter a daily news</h1>
      <form className="form-act" noValidate>
        <div className="form-inputs-act">
          <label className="form-label-act"> Enter the title of the daily news</label>
          <input
            className="form-input-act"
            type="text"
            name="main_official"
            value={newstitle}
            placeholder="Enter the title"
            onChange={(e) => {
                setNewsTitle(e.target.value);
            }}
        />
        </div>
        <div className="form-inputs-act">
        <label className="form-label-act">Enter the content of the daily news</label>
        <textarea
            id='' cols='30' rows='6'
            className="form-input-act-text"
            type="text"
            name="actinfo"
            value={newsinfo}
            placeholder="Enter the information"
            onChange={(e) => {
            setNewsInfo(e.target.value);
            }}
        />
        </div>
        <div className="form-datetime">
        <label className="form-label-act">Enter the date of the daily news</label>
        <input
            className="form-time"
            type="text"
            name="acttime"
            value={newsdate}
            placeholder="**/**/****"
            onChange={(e) => {
            setNewsDate(e.target.value);
            }}
        />
        </div>
        <label className="form-error">{errors}</label>
        <button className="form-input-btn-act" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormCreateDailyNews

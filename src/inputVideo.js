import React, { useState } from 'react';
import axios from 'axios';

const Input = () => {
    const [file, setFile] = useState(null);	//파일

    const handleChangeFile = (event) => {
        setFile(event.target.files);
    }

    function Send(){
        const fd = new FormData();
        // 영상 저장
        Object.values(file).forEach((file) => fd.append("file", file));

        axios.post('video', fd, {
            headers: {
                "Content-Type": `multipart/form-data; `,
            },
            //baseURL: 'http://localhost:8080'
        })
            .then((response) => {
                alert(response.statusText);
                console.log(response.data['obj_url']);
                document.getElementById("result").innerText = response.data['obj_url'];

            })
            .catch((error) => {
                // 예외 처리
            })
    }
    return (
        <div>
            FileData
            <div>
                fileData1:  <input type="file" id="file" onChange={handleChangeFile} multiple="multiple"></input>
            </div>


            <div>
                <button onClick={()=> Send()}>Send</button>
            </div>
        </div>
    );
}
export default Input;
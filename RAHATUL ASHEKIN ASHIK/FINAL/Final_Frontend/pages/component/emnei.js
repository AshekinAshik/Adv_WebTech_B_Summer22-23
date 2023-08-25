import { useState } from 'react';
import axios from "axios";
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MyFileUpload = () => {
    const [file, setFile] = useState(null);
    const UPLOAD_ENDPOINT = "http://localhost/react-php-file-upload/backend/upload.php";
    const DOWNLOAD_ENDPOINT = "http://localhost/react-php-file-upload/backend/upload.php";

    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        console.log(file)
        //if await is removed, console log will be called before the uploadFile() is executed completely.
        //since the await is added, this will pause here then console log will be called
        const formData = new FormData();
        formData.append("myfile", file, file.name);
        axios.post(UPLOAD_ENDPOINT, formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        }).then(data => {
            debugger
            console.log(data.data);
        });
    };
    const handleOnChange = e => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };
    const DownloadFile = () => {
        debugger
        axios.post(DOWNLOAD_ENDPOINT, formData).then(data => {
            debugger
            console.log(data.data);
        });
    }
    const handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        }).then((res) => {
            fileDownload(res.data, filename)
        })
    }
    return (
        <div>
            <Row>
                <Col lg={6}>
                    <div className='card text-center' style={{ padding: '30px', background: 'rgb(220 191 233)' }}>
                        <form action='form' onSubmit={handleSubmit}>
                            <div>
                                <h3>Select your files</h3>
                                <input
                                    type="file"

                                    // To select multiple files
                                    //multiple="multiple"
                                    onChange={(e) => handleOnChange(e)}
                                />

                            </div>
                            <button className='btn btn-primary' >
                                Send Files
                            </button>
                        </form>
                    </div>

                </Col>
                <Col lg={6}>
                    <div className='card text-center' style={{ padding: '44px', background: 'rgb(220 191 233)' }}>
                        <h3>Open File in new tab</h3>
                        <a type="button"
                            className="btn btn-secondary btn-lg" target="_blank" href='https://www.africau.edu/images/default/sample.pdf' >Open
                        </a>

                    </div>

                </Col>
            </Row>

        </div>
    )
}
export default MyFileUpload
import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddTrending = () => {
    let history = useHistory();
    const [apartment, setData] = useState({
        chuHo:"",
        tenNha:"",
        dangKi:"",
        kiemTra:"",
        dientich:"",
        soNguoi:"",
        soNha:"",
        tenDuong:"",
        quan:"",

    });

    const { chuHo, tenNha, dangKi, kiemTra, soNha, tenDuong, quan, dientich, soNguoi } = apartment;
    const onInputChange = e => {
        setData({ ...apartment, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("https://rental-apartment-huflit.herokuapp.com/trending", apartment);
        history.push("/");
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Trending</h2>
                <form onSubmit={e => onSubmit(e)}>

                    

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Chủ Hộ: " name="chuHo"  onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Tên Nhà: " name="tenNha" value={tenNha} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Check In:" name="dangKi" value={dangKi} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Check Out" name="kiemTra" value={kiemTra} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Diện Tích: " name="dientich" value={dientich} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Số Người: " name="soNguoi" value={soNguoi} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Số Nhà: " name="soNha" value={soNha} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Tên Đường: " name="tenDuong" value={tenDuong} onChange={e => onInputChange(e)} />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Quận: " name="quan" value={quan} onChange={e => onInputChange(e)} />
                    </div>
                    
                    <button className="btn btn-primary btn-block">Add Trending</button>
                </form>
            </div>
        </div>
    );
};

export default AddTrending;

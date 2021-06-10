import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditTrending = () => {
  let history = useHistory();
  const { id } = useParams();
  const [apartment, setData] = useState({
    //chuHo: "",
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
    setData({ ...apartment, [e.target.chuHo]: e.target.value });
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://thuecanho-admin.herokuapp.com/trending/${id}`, apartment);
    history.push("/");
  };

  const loadData = async () => {
    const result = await axios.get(`http://thuecanho-admin.herokuapp.com/trending/${id}`);
    setData(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Trending</h2>
        <form onSubmit={e => onSubmit(e)}>
          <h3>Thông tin Nhà</h3>
          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Chủ Hộ: " name="chuHo" value={apartment.chuHo} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Tên Nhà: " name="tenNha" value={apartment.tenNha} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Check In" name="dangKi" value={apartment.dangKi} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Check Out" name="kiemTra" value={apartment.kiemTra} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Diện Tích: " name="dientich" value={apartment.dientich} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Số Người: " name="soNguoi" value={apartment.soNguoi} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="email" className="form-control form-control-lg" placeholder="Số Nhà: " name="soNha" value={apartment.soNha} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Tên Đường: " name="tenDuong" value={apartment.tenDuong} onChange={e => onInputChange(e)} />
          </div>

          <div className="form-group">
            <input type="text" className="form-control form-control-lg" placeholder="Quận: " name="quan" value={apartment.quan} onChange={e => onInputChange(e)} />
          </div>
            
          
          <button className="btn btn-warning btn-block">Update Trending</button>
        </form>
      </div>
    </div>
  );
};

export default EditTrending;

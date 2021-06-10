import Axios from 'axios'
import React, { Component } from 'react'
import{Link} from 'react-router-dom'
import * as FaIcon from "react-icons/fa"

import Navbar from '../../Components/navbar'
import TitlePages from '../../Components/titlePages'

export default class Trending extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lstApartment: []
        }
        this.getListApartment()
    }
    componentDidUpdate() {
        this.getListApartment()
    }
    getListApartment = () => {
        Axios.get('https://thuecanho-admin.herokuapp.com/api/admin/getListApartment').then(
            (res) => {
                this.state.lstApartment = res.data;
                this.setState(this);
            }
        );
    }
    render() {
        return (
            <>
            <div className="sticky-top">               
                    <Navbar />
                </div>
            <div className="container">
                <div className="py-4">
                <TitlePages title="QUẢN LÝ TRENDING"/>
                    <div className="row">
                        <div className="col">
                            <Link className="btn btn-primary" to={`/trending/add`}>Thêm</Link>
                        </div>
                        
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Tìm kiếm" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button"><FaIcon.FaSearch /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive-sm">
                    <table className="table border shadow">
                        <thead className="thead-dark">
                            <tr>
                            <th>Action</th>
                                <th scope="col">#</th>
                                <th scope="col">Chủ hộ</th>
                                <th scope="col">Tên nhà</th>
                                <th scope="col">Check in</th>
                                <th scope="col">Check out</th>
                                <th scope="col">Số nhà</th>
                                <th scope="col">Tên đường</th>
                                <th scope="col">Diện tích</th>
                                <th scope="col">Quận</th>
                                <th scope="col">Số người</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.lstApartment.map((val, index) => (
                                <tr>
                                    <th scope="row">{val.ID_NHA}</th>
                                    <td>{val.ID_TT_CHUHO}</td>
                                    <td>{val.TEN_NHA}</td>
                                    <td>{val.CHECKIN}</td>
                                    <td>{val.CHECKOUT}</td> 
                                    {/* <td>{val.KHOANGCHACH_TRUNGTAMTP}</td> */}
                                    {/* <td>{val.SOTANG}</td> */}
                                    <td>{val.SONHA}</td>
                                    <td>{val.TEN_DUONG}</td>
                                    <td>{val.DIENTICH}</td>
                                    <td>{val.ID_QUAN}</td>
                                    <td>{val.SO_NGUOI}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`trending/${val.ID_NHA}`}>View</Link>
                                        <Link className="btn btn-outline-primary" to={`trending/edit/${val.ID_NHA}`}>Edit</Link>
                                        {/* <Link class="btn btn-danger" onClick={() => deleteReport({val.ID_DATCANHO})}>Delete</Link> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}


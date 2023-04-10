import React from 'react'
import "../client.css"
import { IProduct } from '../types/product'
import { Link } from 'react-router-dom'
const HomePage = ({ products }: IProduct) => {
    return (
        <div >
            <div id="header-carousel" className="carousel slide" data-ride="carousel" >
                <div className="carousel-inner" style={{ marginLeft: '27%', width: '70%' }}>
                    <div className="carousel-item active" style={{ height: '410px' }}>
                        <img src='https://res.cloudinary.com/due9gb9nq/image/upload/v1677610004/cld-sample-5.jpg' alt='carousel-1' />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "700px" }}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First
                                    Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '410px' }}>
                        <img className="img-fluid" src={"https://res.cloudinary.com/due9gb9nq/image/upload/v1677610004/cld-sample-5.jpg"} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "700px" }}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First
                                    Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev" style={{ marginLeft: '25%' }}>
                    <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-prev-icon mb-n2" style={{ marginLeft: '35%' }}></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next " >
                    <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-next-icon mb-n2" style={{ marginLeft: '35%' }}></span>
                    </div>
                </a>
            </div>


            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container-fluid pt-5">
                <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">NEW PRODUCTS</span></h2>
                </div>
                <div className="row px-xl-5 pb-3">
                    {products.map((data) => <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src={data.image} alt="" />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{data.name}</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$ {data.price}</h6>
                                    <h6 className="text-muted ml-2"><del>$250.00</del></h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <Link to={`/products/${data._id}`}><a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View
                                    Detail</a></Link>
                                <a href="" className="btn btn-sm text-dark p-0"><i
                                    className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                            </div>
                        </div>
                    </div>

                    )}


                </div>
            </div>

        </div >
    )
}

export default HomePage
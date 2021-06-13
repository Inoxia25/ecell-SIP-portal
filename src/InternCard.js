import React, { Component } from "react";
import { AiFillHome} from 'react-icons/ai';
import { MdDateRange } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import {AiOutlineArrowRight} from 'react-icons/ai';
import {IoIosArrowForward } from "react-icons/io";

import { BiTimeFive } from "react-icons/bi";
export default function InternCard(props) {
    return (
        <div className="internship">
            <div className="individual_internship_header d-flex flex-row justify-content-start">
                <div className="internship_logo">
                    <img loading="lazy" src="/E-cell_White-02.png" className="logo  ml-4 company_logo" />
                </div>
                <div className="company">
                    <div className="mb-2">
                        <a href="" className="profile_name">
                            {props.company}
                        </a>
                    </div>
                    <div className="company_name">
                        <a className="link_display_like_text" href="">
                            {props.profile}{" "}
                        </a>
                    </div>
                </div>
            </div>
            <div className="mb-2 mt-3 individual_internship_internship">
                <div id="location_names" className="d-flex flex-row mb-4 mt-4">
                    <span><AiFillHome  className="material-icons md-18 md-dark"/></span>
                
                    <span>
                        <a className="location_link ml-1" href="/">
                            Remote
                        </a>{" "}
                    </span>
                </div>
                <div className="internship_other_details_container mt-2 d-flex flex-row justify-content-start">
                    <div className="other_detail_item_row d-flex flex-row">
                        <div className="other_detail_item ">
                            <div className="item_heading">
                                <span className="material-icons md-18 md-dark md-icon"><MdDateRange/></span>
                                
                                <span className="md-dark icon-text">Duration</span>
                            </div>
                            <div className="item_body d-flex flex-row">{props.duration} </div>
                        </div>
                    </div>

                    <div className="other_detail_item_row d-flex flex-row">
                        <div className="other_detail_item  stipend_container">
                            <div className="item_heading">
                                <span className="material-icons  md-18 md-dark md-icon"> <FaRupeeSign/></span>
                                <span className="md-dark icon-text">Stipend</span>
                              
                            </div>
                            <div className="item_body d-flex flex-row">
                                <span className="stipend">
                                    <i className="ic-16-currency-inr"></i> {props.stipend}
                                </span>{" "}
                            </div>
                        </div>
                    </div>
                    <div className="other_detail_item_row d-flex flex-row">
                        <div className="other_detail_item  mr-5 apply_by">
                            <div className="item_heading">
                                <span className="material-icons md-18 md-dark md-icon"><BiTimeFive/></span>
                                <span className="md-dark icon-text">Apply By</span>
                            </div>
                            <div className="item_body d-flex flex-row">{props.last_date}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button_container mt-4 d-flex flex-row justify-content-between">
                <div className="tags_container">
                    <div className="label_container label_container_desktop">Internship </div>
                </div>
                <a className="view_detail_button mr-2 float-right" href="">
                    <span className="md-18"> Know More</span>
                    <span className="material-icons md-icon"><IoIosArrowForward/></span>
                </a>
            </div>
        </div>
    );
}


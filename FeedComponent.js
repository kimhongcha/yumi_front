import React, { Component } from 'react';

class Feed extends Component{


    render(){
        return(
            <div className="feed">
                <div className="top">
                    <a href="Feed">
                        <svg aria-label="피드" className="go_mypage" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                        <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path>
                        </svg>
                    </a>
                    <a className="space"></a>
                    <a href="MyPage">
                        <svg aria-label="마이페이지" className="go_feed" fill="#262626" height="22" viewBox="0 0 32 32" width="22">
                            <path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                        </svg>
                    </a>
                    <a>
                        <input className="search" placeholder="검색"/>
                    </a>
                    <a href="/">
                        <button id="logout" className="logout">로그아웃</button>
                    </a>
                </div>
                <div className="Feed">
                    <div className="postbox">
                        <div className="userbox">
                            <div className="who_box">
                                <a className="who_pic" href="#">
                                    <img className="who" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/106369197_369173237393695_2138945889638860896_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=GSZuuUgVQ5UAX-diYwL&amp;tp=1&amp;oh=b1ec902a139528266a75625e3859408b&amp;oe=600DC398"/>
                                </a>
                                <span className="tqtq">sksckdbal</span>
                            </div>
                        </div>
                        <div className="photobox">
                            <img className="myphoto" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=a7a0d0ed864280aeae89f985101b8b74&amp;oe=6018DC75 150w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=2a9674cfc6c2346fd97198b03549f659&amp;oe=6018683F 240w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=b6d1b404ef1731f1af6cdbda36499520&amp;oe=60192D05 320w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=866e16f3e634c70fb9f8994f57385031&amp;oe=601ADC5F 480w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=c2f50851544a41403723e417615e8951&amp;oe=601AAFD4 640w" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=c2f50851544a41403723e417615e8951&amp;oe=601AAFD4"/>
                        </div>
                        <div className="btnbox">
                            <span className="btngood">
                                <button className="good">
                                    <svg className="icon" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                    </svg>
                                </button>
                            </span>
                            <span className="btncomment">
                                <button className="comment">
                                    <svg className="icon" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                        <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </span>
                            <span className="btnsave">
                                <button className="save">
                                    <svg className="icon" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div className="vcomment">
                            <span className="commentuser">
                                <a className="namee" href="#">skswjddyddnjs</a>
                            </span>
                            &nbsp;
                            <span className="content">
                                <span>메롱!!!!!</span>
                            </span>
                        </div>
                        <div className="wcomment">
                            <form className="write_form" method="POST">
                                <textarea className="write" placeholder="댓글 달기" autocomplete="off" autocorrect="off"/>
                                <button className="wc">입력</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Feed;



import React, { Component } from 'react';

class Archive extends Component{


    render(){
        return(
            <div className="mypage">
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
                <div className="profile">
                    <div className="pic_box">
                        <button className="profile_pic">
                           <img alt="프로필 사진 바꾸기" className="pic" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/106369197_369173237393695_2138945889638860896_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=GSZuuUgVQ5UAX-diYwL&amp;tp=1&amp;oh=b1ec902a139528266a75625e3859408b&amp;oe=600DC398"/>
                        </button>
                    </div>
                    <div className="informaiton">
                        <div className="user">
                            <span className="username">sksckdbal</span>
                            <a href="/edit">
                                <button className="edit_profile">프로필 편집</button>
                            </a>
                            <svg aria-label="옵션" class="bt" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                                <path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        {/* <div>
                            <ul className="detail">
                                <li className="post">
                                    <span>게시물 </span>
                                    7
                                </li>
                                <li className="follower">
                                    <span>팔로워 </span>
                                    7
                                </li>
                                <li className="follow">
                                    <span>팔로우 </span>
                                    7
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    
                </div>
                <div className="post_navi">
                    <a className="mypost" href="/mypage">
                        <span>
                            <svg aria-label="게시물" className="one" fill="#262626" height="12" viewBox="0 0 48 48" width="12">
                                <path clip-rule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z" fill-rule="evenodd"></path>
                            </svg>
                            <span className="s">게시물</span>
                        </span>
                    </a>
                    <a className="archive" href="/archive">
                        <span>
                            <svg aria-label="보관됨" className="three " fill="#262626" height="12" viewBox="0 0 48 48" width="12">
                                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                            </svg>
                            <span className="s">보관됨</span>
                        </span>
                    </a>
                    <a className="saved" href="/saved">
                        <span>
                            <svg aria-label="저장됨" className="two" fill="#262626" height="12" viewBox="0 0 48 48" width="12">
                                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                            </svg>
                            <span className="s">저장됨</span>
                        </span>
                    </a>
                </div>
                {/* <div className="grid">
                    <div className="photo_space">
                        <div className="first_space">
                            <a href="#">
                                <div className='ONE'>
                                    <img className="FFAVD" decoding="auto" sizes="222px" srcset="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/125547149_793338814779066_5491118110387408982_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=-bXS8KdQtF0AX9sTvKZ&amp;tp=1&amp;oh=8a07bfcd1e4089ee830d9c4c0dc5d1ee&amp;oe=601AFF44 150w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/125547149_793338814779066_5491118110387408982_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=-bXS8KdQtF0AX9sTvKZ&amp;tp=1&amp;oh=86094ed729d66f280fbfaf7b12f39d3e&amp;oe=60199DC6 240w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/125547149_793338814779066_5491118110387408982_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=-bXS8KdQtF0AX9sTvKZ&amp;tp=1&amp;oh=209dcb51df645a2736404af21360cf3d&amp;oe=6019A13C 320w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/125547149_793338814779066_5491118110387408982_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=-bXS8KdQtF0AX9sTvKZ&amp;tp=1&amp;oh=f125950814b276f2ae409118c59d647e&amp;oe=601A467D 480w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/125547149_793338814779066_5491118110387408982_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=-bXS8KdQtF0AX9sTvKZ&amp;tp=1&amp;oh=347551c3a0e2f3f94e469fe5ba46184b&amp;oe=601A1B47 640w" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/125547149_793338814779066_5491118110387408982_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=-bXS8KdQtF0AX9sTvKZ&amp;tp=1&amp;oh=347551c3a0e2f3f94e469fe5ba46184b&amp;oe=601A1B47"/>
                                </div>
                            </a>
                            <a href="#">
                                <div className='TWO'>
                                    <img className="FFVAD" decoding="auto" sizes="222px" srcset="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/120117862_327193388545348_4733929450112598495_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=2IlUPwOV74wAX8d8RT3&amp;tp=1&amp;oh=56c68ee39be42af6914b2bfcbee9eb7e&amp;oe=6018673F 150w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/120117862_327193388545348_4733929450112598495_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=2IlUPwOV74wAX8d8RT3&amp;tp=1&amp;oh=756c56191e61e272ebd58ace9ee0055e&amp;oe=601A75B9 240w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/120117862_327193388545348_4733929450112598495_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=2IlUPwOV74wAX8d8RT3&amp;tp=1&amp;oh=65fa1cb10041480f9e4dabb33d73c9e3&amp;oe=60183B47 320w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/120117862_327193388545348_4733929450112598495_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=2IlUPwOV74wAX8d8RT3&amp;tp=1&amp;oh=e69955e6ed9eda74d54ac28d8f0a621e&amp;oe=601B5A82 480w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120117862_327193388545348_4733929450112598495_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=2IlUPwOV74wAX8d8RT3&amp;tp=1&amp;oh=38d4fb294bdcbd6cfc2e9367c0361617&amp;oe=6017FB3C 640w" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/120117862_327193388545348_4733929450112598495_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=2IlUPwOV74wAX8d8RT3&amp;tp=1&amp;oh=38d4fb294bdcbd6cfc2e9367c0361617&amp;oe=6017FB3C"/>
                                </div>
                            </a>
                            <a href="#">
                                <div className='THR'>
                                    <img class="FFVAD" decoding="auto" sizes="222px" srcset="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=a7a0d0ed864280aeae89f985101b8b74&amp;oe=6018DC75 150w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=2a9674cfc6c2346fd97198b03549f659&amp;oe=6018683F 240w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=b6d1b404ef1731f1af6cdbda36499520&amp;oe=60192D05 320w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=866e16f3e634c70fb9f8994f57385031&amp;oe=601ADC5F 480w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=c2f50851544a41403723e417615e8951&amp;oe=601AAFD4 640w" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96081035_1559140430915991_534532394298134695_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=103&amp;_nc_ohc=OiEcDbXYraAAX84hdd2&amp;tp=1&amp;oh=c2f50851544a41403723e417615e8951&amp;oe=601AAFD4"/>
                                </div>
                            </a>
                        </div>
                        <div className="second_space">
                            <a href="#">
                                <div className='FOU'>
                                <img class="FFVAD" decoding="auto" sizes="222px" srcset="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s150x150/71179992_147624393175256_8198915255929146670_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=Vaqb20LbATUAX_FVwVm&amp;tp=1&amp;oh=1fc40e78411ea55563cd78e19b687ef5&amp;oe=601A8CFA 150w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/71179992_147624393175256_8198915255929146670_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=Vaqb20LbATUAX_FVwVm&amp;tp=1&amp;oh=223327075df14b1b05e795ed25084399&amp;oe=601AA234 240w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/71179992_147624393175256_8198915255929146670_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=Vaqb20LbATUAX_FVwVm&amp;tp=1&amp;oh=55b72804ae04779474091f26500acfc1&amp;oe=6018590A 320w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/71179992_147624393175256_8198915255929146670_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=Vaqb20LbATUAX_FVwVm&amp;tp=1&amp;oh=37e33acdd6e456c867ba77a9dc192836&amp;oe=60182854 480w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/71179992_147624393175256_8198915255929146670_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=Vaqb20LbATUAX_FVwVm&amp;tp=1&amp;oh=02b40bebebf07b7c8f76ea4f3404d0ed&amp;oe=601B7BDF 640w" src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/71179992_147624393175256_8198915255929146670_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=Vaqb20LbATUAX_FVwVm&amp;tp=1&amp;oh=02b40bebebf07b7c8f76ea4f3404d0ed&amp;oe=601B7BDF"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> */}

            </div>

        );
    }
}

export default Archive;

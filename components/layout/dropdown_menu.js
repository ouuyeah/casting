import React from 'react'
import Link from 'next/link'

export default class DropdownMenu extends React.Component {
  render () {
    return (
      <div className='dropdown'>
        <div className='rightNav'>
          <img src='/static/user.jpg' />
        </div>
        <div className='dropdown-content'>
          <div className='head'>
            <span>Hi Julián</span>
          </div>
          <Link prefetch href='/user/profile'><a href='#'>Profile</a></Link>
          <a href='#'>Your matches</a>
          <a href='/logout'>Logout</a>
        </div>
        <style jsx>{`
          .rightNav {
            cursor: pointer;
            float: right;
            position: relative;
            top: 40px;
          }
          .rightNav img{
            border-radius: 56px;
            width: 52px;
          }
          .head {
            background: #60b1ad;
            border-radius: 2px 2px 0px 0px;
            color: #fff;
            padding: 12px 16px;
          }

          .dropdown {
              position: relative;
              display: inline-block;
              float: right;
          }
          .dropdown-content {
            border: none;
            box-shadow: 1px 2px 2px #d6d5d5;
            background-color: #f9f9f9;
            display: none;
            min-width: 250px;
            position: absolute;
            right: 0px;
            top: 105px;
            z-index: 10;
          }
          .dropdown-content:before {
            bottom: auto;
            border: 10px solid rgba(82, 82, 82, 0);
            border-top: 0;
            border-bottom-color: #60b1ad;
            background: #fff;
            content: "";
            display: inline-block;
            position: absolute;
            right: 14px;
            top: -10px;
          }
          .dropdown-content a {
              color: #4c4c4c;
              display: block;
              font-size: 15px;
              padding: 16px 16px;
              text-decoration: none;
          }
          .dropdown-content a:hover {
            background-color: #f1f1f1;
            padding-left: 22px;
            transition: 0.30s padding ease-out;
          }
          .dropdown:hover .dropdown-content {
              display: block;
          }
          @media (max-width: 991px) {
            .rightNav {
              top: 15px;
            }
              .rightNav img {
                width: 47px;
              }
            .dropdown-content {
              top: 77px;
            }
          }
        `}</style>
      </div>
    )
  }
}

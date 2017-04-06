import React from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <nav className='wrap container-fluid'>
          <div>
            <div className='logo'>
              <Link prefetch href='/'><a><img src='/static/logo.png' /></a></Link>
            </div>
            <div className='rightNav'>
              <img src='/static/user.jpg' />
            </div>
          </div>
        </nav>
        <style jsx>{`
          header {
            background: #fff;
            box-shadow: 1px 1px 1px #ddd;
            min-height: 136px;
          }
          .logo {
            float: left;
            left: 42%;
            position: relative;
          }
            .logo img{
              width: 175px;
            }
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
        `}</style>
      </header>
    )
  }
}

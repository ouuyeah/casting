import React from 'react'
import Link from 'next/link'
import DropdownMenu from './dropdown_menu'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <nav className='wrap container-fluid'>
          <div>
            <div className='logo'>
              <Link prefetch href='/'><a><img src='/static/logo.png' /></a></Link>
            </div>
            <DropdownMenu />
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
              width: 192px;
            }

          @media (max-width: 991px) {
            header {
              min-height: 79px;
            }

            .logo {
              left: 0;
              right: 34px;
            }
              .logo img {
                width: 101px;
              }
          }
        `}</style>
      </header>
    )
  }
}

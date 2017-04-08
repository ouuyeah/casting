import React from 'react'
import Options from './options'
import DropBox from './dropzone'
import Link from 'next/link'

export default class Home extends React.Component {
  render () {
    return (
      <section>
        <div className='wrap container-fluid'>
          <div className='box'>
            <div className='title'>
              <img src='/static/images/stella.png' />
              <h3 className='col-md-7'>Darling, just upload a picture of the person you want to match and give me their stats, then I will work  my magic, it's gonna be a gas!</h3>
            </div>
            <DropBox />
            <Options />
            <Link prefetch href='/results'><a><button>I wanna see Double!</button></a></Link>
          </div>
        </div>
        <style jsx>{`
          .box{
            background: #ffffff;
            box-shadow: 1px 2px 2px #eaeaea;
            margin-bottom: 24px;
            margin-top: 15px;
            min-height: 719px;
            padding: 30px;
            text-align: center;
          }
          .box button {
            background: #ed5f84;
            border-radius: 2px;
            border: none;
            color: #fff;
            font-size: 16px;
            margin-bottom: 50px;
            margin-top: 25px;
            padding: 13px 20px;
          }
            .box button:hover{
              background: #e4466f;
            }
          .title {
            align-items: center;
            display: flex;
            justify-content: center;
          }
            .title h3 {
              text-align: left;
              margin-top: 40px;
            }
            .title img {
              width: 175px;
              position: relative;
              right: 34px;
            }
        `}</style>
      </section>
    )
  }
}

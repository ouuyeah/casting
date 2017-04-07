import React from 'react'
import Pictures from './pictures'

export default class Results extends React.Component {
  render () {
    return (
      <section>
        <div className='wrap container-fluid'>
          <div className='box'>
            <div className='row'>
              <div className='col-md-6 col-xs-12'>
                <div className='title'>
                  <h3>Here are your matches, darling!</h3>
                </div>
              </div>
              <div className='col-md-6 col-xs-12'>
                <div className='you'>
                  <img src='/static/user.jpg' className='img-res' />
                </div>
              </div>
            </div>
            <Pictures />
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
          .you {
            text-align: left;
          }
            .you img {
              border-radius: 2px;
              width: 175px;
            }
          .title {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: flex-end;
            text-align: left;
          }
          .title h3 {
            width: 200px;
          }
          @media (max-width: 991px) {
            .title {
              text-align: left;
              margin-left: 36px;
              justify-content: center;
            }
            .title h3{width: 100%;}
            .you {
              text-align: center;
            }
          }
        `}</style>
      </section>
    )
  }
}

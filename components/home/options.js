import React from 'react'

export default class Options extends React.Component {
  render () {
    return (
      <div className='options'>
        <div className='row'>
          <div className='col-md-4 col-xs-12'>
            <div className='checks'>
              <input type='checkbox' />M
              <input type='checkbox' />F
            </div>
          </div>
          <div className='col-md-6 col-xs-12'>
            <div className='inputs'>
              <input type='text' placeholder='height' />
              <input type='text' placeholder='weight' />
            </div>
          </div>
        </div>
        <style jsx>{`
          .options{

          }
            .options input[type=text] {
              border-radius: 2px;
              border: 1px solid #ccc;
              box-sizing: border-box;
              margin: 5px 7px;
              padding: 9px 9px;
            }
          .checks {
            text-align: right;
            position: relative;
            top: 10px;
          }
          .inputs {
            text-align: left;
          }
          @media (max-width: 991px) {
            .checks {
              margin-bottom: 20px;
              text-align: center;
            }
            .inputs{
              text-align: center;
            }
          }
        `}</style>
      </div>
    )
  }
}

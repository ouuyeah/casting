import React from 'react'

export default class Options extends React.Component {

  options = () => {
    let opts = []
    for (let i = 90; i < 301; i+=5) {
      opts.push(<option key={i} value='{i}'>{i}lbs</option>)
    }
    return opts
  }
  render () {
    return (
      <div className='options'>
        <div className='row'>
          <div className='col-md-4 col-xs-12'>
            <div className='checks'>
              <input type='radio' name='gender' />M
              <input type='radio' name='gender' />F
            </div>
          </div>
          <div className='col-md-6 col-xs-12'>
            <div className='inputs'>
              <select name='height'>
                <option value=''>Select height</option>
                <option value=''>Less than 4’</option>
                <option value=''>4.5’</option>
                <option value=''>5’</option>
                <option value=''>5.5’</option>
                <option value=''>6’</option>
                <option value=''>6.5’</option>
                <option value=''>More than 6’5 “</option>
              </select>
              <select name='weight'>
                <option value=''>Select weight</option>
                <option value=''>Less than 90lbs</option>
                {
                  this.options()
                }
                <option value=''>More than 300lbs</option>
              </select>
            </div>
          </div>
        </div>
        <style jsx>{`
          .options{

          }
            .options input[type=radio] {
              cursor: pointer;
            }
            .options select {
              background: #ececec;
              border-radius: 2px;
              border: 1px solid #ccc;
              box-sizing: border-box;
              color: #4c4c4c;
              font-size: 14px;
              margin: 5px 7px;
              outline: none;
              padding: 9px 9px;
              width: 180px;
            }
          .checks {
            position: relative;
            text-align: right;
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

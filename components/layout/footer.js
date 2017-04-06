import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className='wrap container-fluid'>
          Casting.ai - Love it!
        </div>
        <style jsx>{`
          footer{
            background: #60b1ad;
            color: #fff;
            padding-bottom: 20px;
            padding-top: 20px;
            text-align: center;
          }
        `}</style>
      </footer>
    )
  }
}

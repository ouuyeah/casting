import React from 'react'
import Dropzone from 'react-dropzone'

export default class DropBox extends React.Component {
  render () {
    return (
      <div className='dropZone'>
        <Dropzone onDrop={this.onDrop} className='dropBox'>
          <div>Try dropping a headshot here, or click to upload.</div>
        </Dropzone>
        <style jsx global>{`
          .dropZone {
            display: flex;
            justify-content: center;
            margin: 20px 0px;
          }
          .dropBox {
              align-items: center;
              border: 2px dashed #b5b5b5;
              box-shadow: 1px 1px 1px #efefef;
              color: #8a8a8a;
              display: flex;
              font-size: 20px;
              height: 175px;
              justify-content: center;
              padding: 0px 43px;
              width: 360px;
          }
        `}</style>
      </div>
    )
  }
}

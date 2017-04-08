import React from 'react'

export default class Pictures extends React.Component {
  render () {
    return (
      <div className='row results'>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne.jpg' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne2.jpg' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne3.jpg' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne4.png' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne.jpg' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne2.jpg' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne3.jpg' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-4 col-xs-12'>
          <div className='boxPicture'>
            <img src='/static/images/dwayne4.png' className='img-res' />
            <div className='info'>
              <p>Dwayne Johnson</p>
              <p>6'4 - 264lbs</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .results {
            margin-top: 40px;
          }
          .boxPicture {
            padding: 13px 13px;
            text-align: left;
          }
            .boxPicture img{
              border-radius: 2px;
              height: 190px;
            }
          .info p {
            color: #4c4c4c;
            font-size: 14px;
            margin: 5px 0px;
          }
          @media (max-width: 991px) {
            .boxPicture img{
              height: 100%;
            }
          }
        `}</style>
      </div>
    )
  }
}

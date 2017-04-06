import React from 'react'
import Head from 'next/head'

export default class Header extends React.Component {
  render () {
    const {title = 'Casting.ai'} = this.props
    return (
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css' type='text/css' />
        <link rel='stylesheet' href='/static/css/global.css' type='text/css' />
      </Head>
    )
  }
}

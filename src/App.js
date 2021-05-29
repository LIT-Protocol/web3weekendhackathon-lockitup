import React, { useState } from 'react'
import './App.css'
import LitJsSdk from 'lit-js-sdk'

function App () {
  const [contractAddress, setContractAddress] = useState('')
  const [content, setContent] = useState('')

  const submit = () => {
    console.log('submitted')

    // encrypt content
    const lockedContentDataUrl = ''
    const toEncrypt = `<a href="${lockedContentDataUrl}" target="_blank"/>Click here to get your locked content</a>`

    // upload to IPFS

    // save key to LIT protocol

    // present URL to user
  }
  const handleContentChosen = (e) => {
    setContent(e.target.files[0])
  }
  return (
    <div className='App'>
      <h1>Lock your content behind an ERC20 token with LIT Protocol</h1>
      <h4>Only users with at least 1 whole token will be able to unlock your content</h4>

      Token contract address:{' '}
      <input type='text' value={contractAddress} onChange={e => setContractAddress(e.target.value)} />

      <br />
      <br />

      Your content:{' '}
      <input
        type='file'
        onClick={e => e.target.value = ''}
        onChange={handleContentChosen}
      />

      <br />
      <br />
      <button onClick={submit}>Submit</button>
      <br />
      <br />
      <h3>Instructions from scratch to mint and sell your token and locked content:</h3>
      <p>
        1. Create your ERC20 token.  You can do this at the URL below.  Choose Kovan for the network for the hackathon.
        <br />
        <a href='https://vittominacori.github.io/erc20-generator/create-token/?tokenType=SimpleERC20'>https://vittominacori.github.io/erc20-generator/create-token/?tokenType=SimpleERC20</a>
      </p>
      <p>
        2. Use this website to lock some content into a LIT that corresponds to your new token.  Save the IPFS url that is created.  Provide this URL to your token owners somehow.  Maybe advertise it along side the sale on your twitter or something.  Only token owners will be able to unlock the content at this URL.
      </p>
      <p>
        3. Sell your token and content by creating a new uniswap pool here https://app.uniswap.org/#/add/ETH.
      </p>
    </div>
  )
}

export default App

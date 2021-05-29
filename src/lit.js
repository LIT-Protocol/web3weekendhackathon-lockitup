import LitJsSdk from 'lit-js-sdk'

const createHtmlLit = ({ tokenAddress, encryptedZipDataUrl }) => {
  const htmlBody = `<h1>Hello.  Only owners of the token at ${tokenAddress} can unlock this content</h1><button id=\'unlockButton>Unlock the content</button>`
  return LitJsSdk.createHtmlLIT({
    title: `Locked Content for token holders at ${tokenAddress}`,
    htmlBody,
    tokenAddress,
    chain: 'kovan',
    encryptedZipDataUrl
  })
}

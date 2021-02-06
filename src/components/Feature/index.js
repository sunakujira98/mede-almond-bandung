import React from 'react'
import { FeatureContainer, FeatureButton } from './views'

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Top kacang bulan ini</h1>
      <p>Almond Premium</p>
      <a
        target='_blank'
        href={
          'https://api.whatsapp.com/send?phone=6281809091567&text=Halo%20Admin.%20Mau%20pesan%20Almond%20Premium%20nih.'
        }
        rel='noreferrer'
      >
        <FeatureButton>Pesan Sekarang</FeatureButton>
      </a>
    </FeatureContainer>
  )
}

export default Feature

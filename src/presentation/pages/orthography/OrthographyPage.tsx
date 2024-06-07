import React from 'react'
import { MyMessage, GptMessage } from '../../components';

const OrthographyPage = () => {
  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>

          {/* Welcome */}
          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayuda con las correcciones" />
          <MyMessage text="Hola Mundo"/>

        </div>
      </div>
    </div>
  )
}

export default OrthographyPage
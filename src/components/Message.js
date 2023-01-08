import React from 'react'

function Message({ isCorrect, turn, solution }) {
  return (
    <div className='message'>
        {isCorrect && (
            <div>
                <h1>You Win!!</h1>
                <p className='solution'>{solution}</p>
                <p>You guess it in {turn} turns</p>
                <h3>Refresh for new turn</h3>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You are excelent!</h1>
                <p className='solution'>{solution}</p>
                <p>Better luck next time</p>
                <h3>Refresh for new turn</h3>
            </div>
        )}
    </div>
  )
}

export default Message
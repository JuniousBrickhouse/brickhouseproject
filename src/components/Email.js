import * as emailjs from 'emailjs-com'
const SERVICE_ID = 'service_rr6w06b'
const TEMPLATE_ID = 'brickhouse_consulting'
const USER_ID = 'user_x7yYaw560caoImG7WOD7y'

const Email = () => {
  const templateParams = {
    to_name: 'Dan',
    from_name: 'Betty',
    message: 'testing out this email to see if it works',
    reply_to: 'soemthing@mail.com',
    first_name: 'Betty'
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(response => {
        console.log('SUCCESS!')
      }, function (error) {
        console.log('FAILED...', error)
      })

    // emailjs.send('service_rr6w06b', 'brickhouse_consulting', USER_ID, {
    //   to_name: 'Dan',
    //   from_name: 'Betty Zoop',
    //   message: 'This is a test without variables',
    //   reply_to: 'who cares',
    //   first_name: 'Betty'
    // })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type='submit'>Click me</button>
      </form>
    </>
  )
}

export default Email

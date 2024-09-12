import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import HeaderTitle from './HeaderTitle'
import Button from './Button'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pdwpjte',
      'template_y23z1sw',
      form.current,
      {
        publicKey: 'yuJ7lQcz6uQc5Et7h',
      }
    );
    e.target.reset()
  };

  return (
    <section id='contact' className='h-screen w-full '>
      <div className='flex flex-col items-center h-full my-10 sm:my-16 md:my-20'>
        <HeaderTitle title={'Contact'} text={'Get In Touch'} />
        <div className='grid md:grid-cols-[58%_30%] gap-[12%] px-12 w-full mt-6'>
          <form ref={form} onSubmit={sendEmail} className=' flex flex-col items-start '>
            <input type='text' name='name' placeholder='Your Subject' required className='bg-transparent border-b-2 border-textSecondary py-5 px-3 w-full focus:outline-none' />
            <input type='text' name='name' placeholder='Your Full Name' required className='bg-transparent border-b-2 border-textSecondary py-5 px-3 w-full focus:outline-none' />
            <input type='email' name='email' placeholder='Your Email' required className='bg-transparent border-b-2 border-textSecondary py-5 px-3 w-full focus:outline-none' />
            <textarea name='message' placeholder='Your Message' required className='bg-transparent border-b-2 border-textSecondary py-5 px-3 w-full focus:outline-none resize-none' rows={6}></textarea>
            <button type='submit' className='btn btn-primary mt-10' ><Button text={'SUBMIT'} /></button>
          </form>

          <div className='flex flex-col gap-[1.2rem]'>
            <article className='p-6 text-center '>
              <h4>Email</h4>
              <h5>lhmajola@outlook.com</h5>
              <a href='mailto: lhmajola@outlook.com' target='_blank' rel='noreferrer'>Send a message</a>
            </article>

            <article className='p-6 text-center  '>
              <h4>Messanger</h4>
              <h5>lwandilemajola</h5>
              <a href='https://m.me/lwandile.majola.9843' target='_blank' rel='noreferrer'>Send a message</a>
            </article>

            <article className='p-6 text-center  transition-all'>
              <h4>WhatsApp</h4>
              <h5>+27123456789</h5>
              <a href='https://wa.me/27744806658' target='_blank' rel='noreferrer'>Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}


        </div>
      </div>
    </section>
  )
}

export default Contact
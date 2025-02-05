import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import HeaderTitle from './HeaderTitle'
import Button from './Button'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

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
    <section id='contact' className='h-fit bg-custom-pattern '>
      <div className='flex flex-col items-center py-10 sm:py-16 md:py-20'>
        <HeaderTitle title={'Contact'} text={'Get In Touch'} />

        <div className='grid md:grid-cols-[28%_58%] gap-10 md:gap-[14%] w-7/12 md:w-11/12 lg:w-8/12 md:justify-center my-12'>
          <div className='flex flex-col gap-[1.2rem] text-lg'>
            <article className='p-6 text-center rounded-3xl space-y-2 bg-black/35 backdrop-blur-3xl border border-transparent hover:border-primary hover:bg-transparent transition-all duration-700'>
              <HiOutlineMail className='mx-auto mb-3 text-primary' />
              <h4>Email</h4>
              <h5>lhmajola@outlook.com</h5>
              <a className='hover:text-primary' href='mailto: lhmajola@outlook.com' target='_blank' rel='noreferrer'>Send a message</a>
            </article>

            <article className='p-6 text-center rounded-3xl space-y-2 bg-black/35 backdrop-blur-xl border border-transparent hover:border-primary hover:bg-transparent transition-all duration-700'>
              <FaLinkedin className='mx-auto mb-3 text-primary' />
              <h4>LinkedIn</h4>
              <h5>Lwandile Majola</h5>
              <a className='hover:text-primary' href='https://www.linkedin.com/in/lwandile-majola' target='_blank' rel='noreferrer'>Send a message</a>
            </article>

            <article className='p-6 text-center rounded-3xl space-y-2 bg-black/35 backdrop-blur-xl border border-transparent hover:border-primary hover:bg-transparent transition-all duration-700'>
              <FaWhatsapp className='mx-auto mb-3 text-primary' />
              <h4>WhatsApp</h4>
              <h5>+2766 019 9145</h5>
              <a className='hover:text-primary' href='https://wa.me/27660199145' target='_blank' rel='noreferrer'>Send a message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start gap-2 bg-black/35 backdrop-blur-xl p-7 rounded-3xl overflow-hidden h-fit'>
            <input type='text' name='subject' placeholder='Your Subject' required className='bg-transparent border-b-2 border-textSecondary  p-3 w-full focus:outline-none' />
            <input type='text' name='name' placeholder='Your Full Name' required className='bg-transparent border-b-2 border-textSecondary p-3 w-full focus:outline-none' />
            <input type='email' name='email' placeholder='Your Email' required className='bg-transparent border-b-2 border-textSecondary p-3 w-full focus:outline-none' />
            <textarea name='message' placeholder='Your Message' required className='bg-transparent border-b-2 border-textSecondary p-3 w-full focus:outline-none resize-none' rows={3}></textarea>
            <div className='btn btn-primary mt-5' ><Button text={'SUBMIT'} primary={true} /></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
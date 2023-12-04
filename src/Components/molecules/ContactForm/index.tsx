/* TODO: add hook form */
const ContactForm = () => {
  return (
    <form className='flex w-full flex-col gap-4'>
      <label className='hidden' htmlFor='name'>
        Nome
      </label>
      <input
        className='rounded-2xl border px-4 py-5 focus:border-secondary'
        type='text'
        name='name'
        id='name'
        placeholder='Nome'
        required
      />
      <label className='hidden' htmlFor='email'>
        Email
      </label>
      <input
        className='rounded-2xl border px-4 py-5 focus:border-secondary'
        type='email'
        name='email'
        id='email'
        placeholder='Email'
        required
      />
      <label className='hidden' htmlFor='message'>
        Mensagem
      </label>

      <textarea
        className='min-h-[200px] rounded-2xl border px-4 py-5 focus:border-secondary'
        name='message'
        id='message'
        placeholder='Mensagem'
      />
      <button
        type='submit'
        className='rounded-2xl border bg-secondary px-4 py-5 text-xl font-bold text-white'
      >
        🚀 Enviar mensagem
      </button>
    </form>
  );
};

export default ContactForm;

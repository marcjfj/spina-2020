export default function Form({inputs}) {
  console.log(inputs)
  return (
    <section className="form-wrapper">
      <form 
        method="POST" 
        data-netlify="true" 
        name="contact" 
        action="/contact"
        className="form">
        {inputs.map(({Label, type}) => {
          return (
          <div className="input-wrapper">
            <label className="form-label"> {Label}
            {type === 'textarea' ? (
              <textarea className="input" name={Label} rows={10}></textarea>
            ) : (
              <input className="input" name={Label} type={type} required/>
            )}
              </label>
          </div> 
          )
        })}
        <button className="send-button">
          Send
          </button>
      </form>
    </section>
  )
}
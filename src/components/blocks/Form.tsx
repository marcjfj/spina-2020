import {useRouter} from 'next/router';
import { useRef, useState } from 'react';
export default function Form({inputs}) {
  console.log(inputs)
  const formRef = useRef(null);
  const [formState, setFormState] = useState({...inputs.reduce((acc, input) => {
    return {...acc, [input.Label]: ""}
  }, {})});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();
  console.log(router);
  const successMsg = () => {
    return formSubmitted ? (
        <div className="success-msg">
          Submitted! 🎉
        </div>
      ) : null
  }
  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(formRef.current);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formRef.current.getAttribute("name"),
        ...formState
      })
    }).then(() => setFormSubmitted(true)).catch(error => alert(error))
}
  return (
    <section className="form-wrapper">
        <form 
          ref={formRef}
          method="POST" 
          data-netlify="true" 
          name={`${router.query.page}`} 
          action="/contact?submitted=true"
          className="form">
          {successMsg()}
          {!formSubmitted ? (
            <div className="form-inner">
              {inputs.map(({Label, type}) => {
                return (
                <div className="input-wrapper">
                  <label className="form-label"> {Label}
                  {type === 'textarea' ? (
                    <textarea className="input" onChange={(e) => setFormState({...formState, [Label]: e.target.value})} name={Label} rows={10}></textarea>
                  ) : (
                    <input className="input" onChange={(e) => setFormState({...formState, [Label]: e.target.value})} name={Label} type={type} required/>
                  )}
                    </label>
                </div> 
                )
              })}
              <input type="hidden" name="form-name" value={`${router.query.page}`} />
              <button onClick={(e) => handleSubmit(e)}className="send-button">
                Send
                </button>
            </div>
          ) : null}
        </form>
    </section>
  )
}
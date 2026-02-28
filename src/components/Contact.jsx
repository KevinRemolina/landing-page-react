import { useState, useEffect } from "react"

function Contact() {

const [success, setSuccess] = useState(false)
const [error, setError] = useState("")

const [loading, setLoading] = useState(false)

const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
})

const handleChange = (e) => {
  const { name, value } = e.target

  setFormData(prev => ({
    ...prev,
    [name]: value
  }))
}

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const handleSubmit = (e) => {
  e.preventDefault()

  if (!formData.name || !formData.email || !formData.message) {
    setError("Todos los campos son obligatorios.")
    return
  }

  if (!validateEmail(formData.email)) {
    setError("El correo electrónico no es válido.")
    return
  }

  setError("")
  setLoading(true)

  setTimeout(() => {
    setLoading(false)
    setSuccess(true)
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }, 1500)
}

useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess(false)
    }, 3000)

    return () => clearTimeout(timer)
  }
}, [success])

return (
    <section className="contact">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>

  <input
    type="text"
    name="name"
    placeholder="Tu nombre"
    value={formData.name}
    onChange={handleChange}
  />

  <input
    type="email"
    name="email"
    placeholder="Tu email"
    value={formData.email}
    onChange={handleChange}
  />

  <textarea
    name="message"
    placeholder="Tu mensaje"
    value={formData.message}
    onChange={handleChange}
  />

    <button type="submit" disabled={loading}>
    {loading ? "Enviando..." : "Enviar"}
    </button>
    {error && <p className="error">{error}</p>}
    {success && <p className="success">Mensaje enviado correctamente.</p>}

</form>
    </section>
  )
}

export default Contact
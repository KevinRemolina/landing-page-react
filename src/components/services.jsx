import ServiceCard from "./ServiceCard"

function Services() {

    const servicesData = [
    {
        id: 1,
        icon: "💻",
        title: "Desarrollo Web",
        description: "Aplicaciones modernas con React y tecnologías actuales."
    },
    {
        id: 2,
        icon: "⚡",
        title: "Optimización",
        description: "Mejora de rendimiento y experiencia de usuario."
    },
    {
        id: 3,
        icon: "🔒",
        title: "Seguridad",
        description: "Buenas prácticas y protección en aplicaciones web."
    }
]

  return (
    <section className="services">
      <h2>Servicios</h2>

      <div className="services-container">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
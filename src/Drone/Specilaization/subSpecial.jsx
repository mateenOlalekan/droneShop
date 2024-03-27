
const subSpecial = ({ icon, title, content }) => {
  return (
    <div className="sub-card">
      {icon}
      <h3>{title}</h3>
      <p>{content}</p>
      <a className='learn-more'>Learn More</a>
    </div>
  )
}

export default subSpecial
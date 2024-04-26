import './index.css'
const BrowserHistory = props => {
  const {eachItem, key, deleteBrowserHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const onDeleteButton = () => {
    deleteBrowserHistory(id)
  }
  return (
    <li className="list-item">
      <div className="big-list-item-container">
        <div className="details-container">
          <p className="time">{timeAccessed}</p>
          <div className="image-heading-paragraph-container">
            <img src={logoUrl} className="logo" alt="domain logo" />
            <div className="heading-paragraph">
              <p className="title">{title}</p>
              <p className="domain-logo">{domainUrl}</p>
            </div>
          </div>
        </div>
        <button className="button" onClick={onDeleteButton} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory

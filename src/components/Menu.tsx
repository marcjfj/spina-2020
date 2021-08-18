import Link from 'next/link'

export default function Menu({show, menuConfig, closeMenu}) {
  const renderLinks = (pages) => {
    return pages.map(({slug, title}) => {
      return (
        <Link 
        key={slug}
        href={`/${slug}`}>
          <a onClick={closeMenu}>{title}</a>
        </Link>
      )
  })
  }
  return (
    <div className={`menu ${show && 'show'}`}>
      <div className="links-wrapper">
        {renderLinks(menuConfig)}
      </div>
    </div>
  )
}
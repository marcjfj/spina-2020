export default function Downloads({files}) {
  return (
    <section className="downloads">
      <div className="content">
        {files.map(file => (
          <a className="btn" key={file.title} href={file.file} download>{file.title}</a>
        ))}
      </div>
    </section>
  )
}
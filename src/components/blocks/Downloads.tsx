export default function Downloads({files}) {
  return (
    <section className="downloads">
      <div className="content">
        {files.map(file => (
          <a className="btn" href={file.file} download>{file.title}</a>
        ))}
      </div>
    </section>
  )
}
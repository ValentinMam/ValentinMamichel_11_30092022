import './tags.css'

function Tags({ tagList }) {
  return (
    <div className="tags">
      {tagList.map((tag, index) => {
        return (
          <div key={index} className="tag">
            {tag}
          </div>
        )
      })}
    </div>
  )
}

export default Tags

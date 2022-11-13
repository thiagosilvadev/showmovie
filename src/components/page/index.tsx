type DetailProps = {
  columns?: number
  title: string
  content: string
}
export const Detail = ({ columns, title, content }: DetailProps) => {
  return (
    <div
      className="py-3 page__detail"
      style={{
        width: columns ? `${(columns / 12) * 100}%` : '100%'
      }}
    >
      <h4 className="text-base font-bold tracking-[-0.015em] text-primary-100">
        {title}
      </h4>
      <h5 className="text-2xl font-semibold tracking-[-0.015em] font-secondary text-dark-50">
        {content}
      </h5>
    </div>
  )
}

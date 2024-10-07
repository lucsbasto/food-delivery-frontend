/* eslint-disable @typescript-eslint/no-explicit-any */

function SectionHeader({ title }: any) {
  return (
    <div className="text-center">
      <h2 className="text-primary font-bold text-4xl italic py-10">{title}</h2>
    </div>
  )
}

export default SectionHeader

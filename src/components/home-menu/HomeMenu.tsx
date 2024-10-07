import MenuItem from "../MenuItem/MenuItem"

const HomeMenu = () => {
  return (
    <section className="py-5">
      <div className="text-center">
        <h2 className="text-primary font-bold text-4xl italic py-10">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
    </section>
  )
}



export default HomeMenu

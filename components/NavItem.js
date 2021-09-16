const NavItem = ({ text }) => {
    return (
        <li className="uppercase font-medium text-xl cursor-pointer hover:scale-105 active:scale-95 duration-100 ease-in hover:text-primary">
            {text}
        </li>
    )
}

export default NavItem

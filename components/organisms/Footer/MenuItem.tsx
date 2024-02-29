interface MenuProps {
  title: string;
  href?: string;
}

export default function Menu(props: Readonly<Partial<MenuProps>>) {
  const { title, href } = props;

  return (
    <li className="mb-6">
      <a href={href} className="text-lg color-palette-1 text-decoration-none">{title}</a>
    </li>
  )
}

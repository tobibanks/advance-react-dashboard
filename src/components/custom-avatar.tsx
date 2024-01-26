import { Avatar as AntdAvatar, AvatarProps } from "antd";

type Props = AvatarProps & {
    name?: string;
}
const CustomAvatar = ({name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
    alt={"Banks"}
    size="small"
    style={{backgroundColor: '#87d068',
            display: 'flex',
            border: 'none',
            alignItems: 'center',
            ...style
        }}   
       {...rest}           
    >
    {name}
    </AntdAvatar>
  )
}

export default CustomAvatar
